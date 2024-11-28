package main

import (
	"fmt"
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

// Constants for collection names and roles
const (
	CollectionNotifications = "notifications"
	CollectionUsers         = "users"
	CollectionTickets       = "tickets"
	CollectionComments      = "commentaries"

	RoleAdmin = "admin"
)

// Field names
const (
	FieldReporter  = "reporter"
	FieldAssignee  = "assignee"
	FieldTitle     = "title"
	FieldUser      = "user"
	FieldTicket    = "ticket"
	FieldWatchers  = "watchers"
	FieldUpdatedBy = "updated_by"
	FieldMessage   = "message"
	FieldViewed    = "viewed"
)

// NotificationService handles notification creation and delivery
type NotificationService struct {
	app *pocketbase.PocketBase
}

func NewNotificationService(app *pocketbase.PocketBase) *NotificationService {
	return &NotificationService{app: app}
}

func (s *NotificationService) Create(userId, message, ticketId string) error {
	collection, err := s.app.FindCollectionByNameOrId(CollectionNotifications)
	if err != nil {
		return fmt.Errorf("failed to find notifications collection: %w", err)
	}

	record := core.NewRecord(collection)
	record.Set(FieldUser, userId)
	record.Set(FieldMessage, message)
	record.Set(FieldTicket, ticketId)
	record.Set(FieldViewed, false)

	if err := s.app.Save(record); err != nil {
		return fmt.Errorf("failed to save notification: %w", err)
	}

	return nil
}

// AdminService handles admin-related operations
type AdminService struct {
	app *pocketbase.PocketBase
}

func NewAdminService(app *pocketbase.PocketBase) *AdminService {
	return &AdminService{app: app}
}

func (s *AdminService) GetAdmins(excludeUserIds []string) ([]*core.Record, error) {
	admins, err := s.app.FindRecordsByFilter(
		CollectionUsers,
		fmt.Sprintf("role = '%s'", RoleAdmin),
		"-created",
		100,
		0,
	)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch admins: %w", err)
	}

	return filterExcludedUsers(admins, excludeUserIds), nil
}

func (s *AdminService) NotifyAll(notifService *NotificationService, message, ticketId string, excludeUserIds []string) error {
	admins, err := s.GetAdmins(excludeUserIds)
	if err != nil {
		return err
	}

	for _, admin := range admins {
		if err := notifService.Create(admin.Id, message, ticketId); err != nil {
			log.Printf("Failed to notify admin %s: %v", admin.Id, err)
		}
	}

	return nil
}

// Utility functions
func filterExcludedUsers(users []*core.Record, excludeUserIds []string) []*core.Record {
	if len(excludeUserIds) == 0 {
		return users
	}

	filtered := make([]*core.Record, 0, len(users))
	for _, user := range users {
		if !contains(excludeUserIds, user.Id) {
			filtered = append(filtered, user)
		}
	}
	return filtered
}

func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
}

func safeGetString(record *core.Record, field string) string {
	if val, ok := record.Get(field).(string); ok {
		return val
	}
	return ""
}

func safeGetStringSlice(record *core.Record, field string) []string {
	if val, ok := record.Get(field).([]string); ok {
		return val
	}
	return []string{}
}

// TicketNotifier handles ticket-related notifications
type TicketNotifier struct {
	notifService *NotificationService
	adminService *AdminService
}

func NewTicketNotifier(app *pocketbase.PocketBase) *TicketNotifier {
	return &TicketNotifier{
		notifService: NewNotificationService(app),
		adminService: NewAdminService(app),
	}
}

func (tn *TicketNotifier) NotifyTicketCreation(ticket *core.Record) error {
	reporter := safeGetString(ticket, FieldReporter)
	assignee := safeGetString(ticket, FieldAssignee)
	title := safeGetString(ticket, FieldTitle)

	excludeUserIds := []string{reporter}
	if assignee != "" {
		excludeUserIds = append(excludeUserIds, assignee)
	}

	// Notify creator
	if err := tn.notifService.Create(
		reporter,
		fmt.Sprintf("You have created a new ticket: %s", title),
		ticket.Id,
	); err != nil {
		log.Printf("Failed to notify reporter: %v", err)
	}

	// Notify assignee if different from creator
	if assignee != "" && assignee != reporter {
		if err := tn.notifService.Create(
			assignee,
			fmt.Sprintf("You have been assigned to a new ticket: %s", title),
			ticket.Id,
		); err != nil {
			log.Printf("Failed to notify assignee: %v", err)
		}
	}

	// Notify admins
	return tn.adminService.NotifyAll(
		tn.notifService,
		fmt.Sprintf("A new ticket has been created: %s", title),
		ticket.Id,
		excludeUserIds,
	)
}

func (tn *TicketNotifier) NotifyTicketUpdate(ticket *core.Record) error {
	currentUserId := safeGetString(ticket, FieldUpdatedBy)
	reporter := safeGetString(ticket, FieldReporter)
	assignee := safeGetString(ticket, FieldAssignee)
	title := safeGetString(ticket, FieldTitle)
	watchers := safeGetStringSlice(ticket, FieldWatchers)

	excludeUserIds := []string{currentUserId, reporter, assignee}

	// Notify relevant parties
	if reporter != currentUserId {
		if err := tn.notifService.Create(
			reporter,
			fmt.Sprintf("A ticket you reported has been updated: %s", title),
			ticket.Id,
		); err != nil {
			log.Printf("Failed to notify reporter: %v", err)
		}
	}

	if assignee != "" && assignee != currentUserId && assignee != reporter {
		if err := tn.notifService.Create(
			assignee,
			fmt.Sprintf("A ticket assigned to you has been updated: %s", title),
			ticket.Id,
		); err != nil {
			log.Printf("Failed to notify assignee: %v", err)
		}
	}

	// Notify watchers
	for _, watcherId := range watchers {
		if !contains(excludeUserIds, watcherId) {
			if err := tn.notifService.Create(
				watcherId,
				fmt.Sprintf("A ticket you're watching has been updated: %s", title),
				ticket.Id,
			); err != nil {
				log.Printf("Failed to notify watcher %s: %v", watcherId, err)
			}
		}
	}

	return tn.adminService.NotifyAll(
		tn.notifService,
		fmt.Sprintf("A ticket has been updated: %s", title),
		ticket.Id,
		excludeUserIds,
	)
}

// SetupNotifications Setup notification handlers
func SetupNotifications(app *pocketbase.PocketBase) {
	ticketNotifier := NewTicketNotifier(app)

	// Handle ticket creation
	app.OnRecordAfterCreateSuccess(CollectionTickets).BindFunc(func(e *core.RecordEvent) error {
		return ticketNotifier.NotifyTicketCreation(e.Record)
	})

	// Handle ticket updates
	app.OnRecordAfterUpdateSuccess(CollectionTickets).BindFunc(func(e *core.RecordEvent) error {
		return ticketNotifier.NotifyTicketUpdate(e.Record)
	})

	// Handle comment creation
	app.OnRecordAfterCreateSuccess(CollectionComments).BindFunc(func(e *core.RecordEvent) error {
		comment := e.Record
		ticketId := safeGetString(comment, FieldTicket)

		ticket, err := app.FindRecordById(CollectionTickets, ticketId)
		if err != nil {
			return fmt.Errorf("failed to find ticket: %w", err)
		}

		return ticketNotifier.NotifyTicketUpdate(ticket)
	})
}

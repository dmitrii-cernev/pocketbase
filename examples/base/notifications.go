package main

import (
	"fmt"
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func createNotification(app *pocketbase.PocketBase, userId string, message string, ticketId string) error {
	collection, err := app.FindCollectionByNameOrId("notifications")
	if err != nil {
		return err
	}
	record := core.NewRecord(collection)

	record.Set("user", userId)
	record.Set("message", message)
	record.Set("ticket", ticketId)
	record.Set("viewed", false)

	return app.Save(record)
}

func getAdmins(app *pocketbase.PocketBase, excludeUserIds []string) ([]*core.Record, error) {
	admins, err := app.FindRecordsByFilter(
		"users",
		"role = 'admin'",
		"-created",
		100,
		0,
	)

	if err != nil {
		return nil, err
	}

	// Filter out excluded users
	filteredAdmins := make([]*core.Record, 0)
	for _, admin := range admins {
		excluded := false
		for _, excludeId := range excludeUserIds {
			if admin.Id == excludeId {
				excluded = true
				break
			}
		}
		if !excluded {
			filteredAdmins = append(filteredAdmins, admin)
		}
	}

	return filteredAdmins, nil
}

func notifyAdmins(app *pocketbase.PocketBase, message string, ticketId string, excludeUserIds []string) error {
	admins, err := getAdmins(app, excludeUserIds)
	if err != nil {
		return err
	}

	for _, admin := range admins {
		err := createNotification(app, admin.Id, message, ticketId)
		if err != nil {
			log.Printf("Failed to notify admin %s: %v", admin.Id, err)
		}
	}

	return nil
}

func triggerNotifications(app *pocketbase.PocketBase) {
	// Handle ticket creation
	app.OnRecordAfterCreateSuccess("tickets").BindFunc(func(e *core.RecordEvent) error {
		ticket := e.Record
		reporter := ticket.Get("reporter").(string)
		assignee, _ := ticket.Get("assignee").(string)
		title := ticket.Get("title").(string)

		excludeUserIds := []string{reporter}
		if assignee != "" {
			excludeUserIds = append(excludeUserIds, assignee)
		}

		// Notify the creator
		err := createNotification(
			app,
			reporter,
			fmt.Sprintf("You have created a new ticket: %s", title),
			ticket.Id,
		)
		if err != nil {
			log.Printf("Failed to notify reporter: %v", err)
		}

		// Notify the assignee if different from the creator
		if assignee != "" && assignee != reporter {
			err := createNotification(
				app,
				assignee,
				fmt.Sprintf("You have been assigned to a new ticket: %s", title),
				ticket.Id,
			)
			if err != nil {
				log.Printf("Failed to notify assignee: %v", err)
			}
		}

		// Notify all admins
		return notifyAdmins(
			app,
			fmt.Sprintf("A new ticket has been created: %s", title),
			ticket.Id,
			excludeUserIds,
		)
	})

	// Handle ticket updates
	app.OnRecordAfterUpdateSuccess("tickets").BindFunc(func(e *core.RecordEvent) error {
		ticket := e.Record
		currentUserId := ticket.Get("updated_by").(string)
		reporter := ticket.Get("reporter").(string)
		assignee, _ := ticket.Get("assignee").(string)
		title := ticket.Get("title").(string)

		excludeUserIds := []string{currentUserId}
		if reporter != "" {
			excludeUserIds = append(excludeUserIds, reporter)
		}
		if assignee != "" {
			excludeUserIds = append(excludeUserIds, assignee)
		}

		// Notify the reporter if they're not the one updating
		if reporter != currentUserId {
			err := createNotification(
				app,
				reporter,
				fmt.Sprintf("A ticket you reported has been updated: %s", title),
				ticket.Id,
			)
			if err != nil {
				log.Printf("Failed to notify reporter: %v", err)
			}
		}

		// Notify the assignee if they're not the one updating and different from the reporter
		if assignee != "" && assignee != currentUserId && assignee != reporter {
			err := createNotification(
				app,
				assignee,
				fmt.Sprintf("A ticket assigned to you has been updated: %s", title),
				ticket.Id,
			)
			if err != nil {
				log.Printf("Failed to notify assignee: %v", err)
			}
		}

		// Notify watchers
		if watchers, ok := ticket.Get("watchers").([]string); ok {
			for _, watcherId := range watchers {
				isExcluded := false
				for _, excludeId := range excludeUserIds {
					if watcherId == excludeId {
						isExcluded = true
						break
					}
				}
				if !isExcluded {
					err := createNotification(
						app,
						watcherId,
						fmt.Sprintf("A ticket you're watching has been updated: %s", title),
						ticket.Id,
					)
					if err != nil {
						log.Printf("Failed to notify watcher %s: %v", watcherId, err)
					}
				}
			}
		}

		// Notify all admins
		return notifyAdmins(
			app,
			fmt.Sprintf("A ticket has been updated: %s", title),
			ticket.Id,
			excludeUserIds,
		)
	})

	// Handle comment creation
	app.OnRecordAfterCreateSuccess("commentaries").BindFunc(func(e *core.RecordEvent) error {
		comment := e.Record
		currentUserId := comment.Get("user").(string)
		ticketId := comment.Get("ticket").(string)

		// Get the related ticket
		ticket, err := app.FindRecordById("tickets", ticketId)
		if err != nil {
			return err
		}

		reporter := ticket.Get("reporter").(string)
		assignee, _ := ticket.Get("assignee").(string)
		title := ticket.Get("title").(string)

		excludeUserIds := []string{currentUserId}
		if reporter != "" {
			excludeUserIds = append(excludeUserIds, reporter)
		}
		if assignee != "" {
			excludeUserIds = append(excludeUserIds, assignee)
		}

		// Notify the ticket reporter if they're not the one commenting
		if reporter != currentUserId {
			err := createNotification(
				app,
				reporter,
				fmt.Sprintf("A new comment has been added to your ticket: %s", title),
				ticketId,
			)
			if err != nil {
				log.Printf("Failed to notify reporter: %v", err)
			}
		}

		// Notify the ticket assignee if they're not the one commenting and different from the reporter
		if assignee != "" && assignee != currentUserId && assignee != reporter {
			err := createNotification(
				app,
				assignee,
				fmt.Sprintf("A new comment has been added to a ticket assigned to you: %s", title),
				ticketId,
			)
			if err != nil {
				log.Printf("Failed to notify assignee: %v", err)
			}
		}

		// Notify watchers
		if watchers, ok := ticket.Get("watchers").([]string); ok {
			for _, watcherId := range watchers {
				isExcluded := false
				for _, excludeId := range excludeUserIds {
					if watcherId == excludeId {
						isExcluded = true
						break
					}
				}
				if !isExcluded {
					err := createNotification(
						app,
						watcherId,
						fmt.Sprintf("A new comment has been added to a ticket you're watching: %s", title),
						ticketId,
					)
					if err != nil {
						log.Printf("Failed to notify watcher %s: %v", watcherId, err)
					}
				}
			}
		}

		// Notify all admins
		return notifyAdmins(
			app,
			fmt.Sprintf("A new comment has been added to ticket: %s", title),
			ticketId,
			excludeUserIds,
		)
	})
}

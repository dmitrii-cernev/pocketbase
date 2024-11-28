package main

import (
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"log"
)

func createNotification(app *pocketbase.PocketBase, userId *string, message *string, ticketId *string) error {
	collection, err := app.FindCollectionByNameOrId("notifications")
	if err != nil {
		return err
	}
	record := core.NewRecord(collection)

	record.Set("user", userId)
	record.Set("message", message)
	record.Set("ticket", ticketId)
	record.Set("viewed", false)

	err = app.Save(record)
	if err != nil {
		return nil
	}

	return err
}

func getAdmins(app *pocketbase.PocketBase) []*core.Record {
	collection, err := app.FindRecordsByFilter(
		"users",
		"role = 'admin'",
		"-name",
		1000,
		0,
		nil,
	)

	if err != nil {
		log.Fatal("Error getting admins")
		return nil
	}

	return collection
}

func triggerNotifications(app *pocketbase.PocketBase) string {
	return app.OnRecordAfterUpdateSuccess("tickets").BindFunc(func(e *core.RecordEvent) error {

		log.Println("current user ", e.Record.Get("updated_by"))
		log.Println("record data ", e.Record)
		return e.Next()
	})
}

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2024-09-01 12:48:26.852Z",
      "updated": "2024-10-02 16:32:24.219Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "vu2dapxs",
          "name": "role",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "user",
              "admin",
              "audit"
            ]
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 6,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    },
    {
      "id": "eeh6yxhgexkzmg7",
      "created": "2024-09-01 12:52:17.137Z",
      "updated": "2024-10-23 15:54:18.941Z",
      "name": "tickets",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "5hpjyxcx",
          "name": "reporter",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "z3ypb5mn",
          "name": "title",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": 3,
            "max": 220,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "mrxygibo",
          "name": "description",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "uf2z7top",
          "name": "status",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "open",
              "in progress",
              "closed",
              "declined",
              "archived"
            ]
          }
        },
        {
          "system": false,
          "id": "mydamzhq",
          "name": "reason",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "oysiuwk4",
          "name": "severity_level",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "low",
              "mid",
              "high"
            ]
          }
        },
        {
          "system": false,
          "id": "dpz2vzcn",
          "name": "factor",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "qtvg9gr9",
          "name": "assignee",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "rkkiqx3a",
          "name": "priority",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "low",
              "mid",
              "high"
            ]
          }
        },
        {
          "system": false,
          "id": "nwpmcnfj",
          "name": "attachments",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [],
            "thumbs": [],
            "maxSelect": 99,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "dsqekdj5",
          "name": "immediate_actions",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "csiis41f",
          "name": "suggestions",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "71sjyhgp",
          "name": "date_of_discovery",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "wdyunbdf",
          "name": "date_of_issue_start",
          "type": "date",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "sfbvig9t",
          "name": "financial_loss",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "el7axqbx",
          "name": "compensations",
          "type": "json",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSize": 2000000
          }
        },
        {
          "system": false,
          "id": "vzsocbyt",
          "name": "department_code",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "gzo2apsz",
          "name": "closing_comments",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "mpewvyio",
          "name": "linked_tickets",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "eeh6yxhgexkzmg7",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "tsy6ubhu",
          "name": "type",
          "type": "select",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "values": [
              "main",
              "sub"
            ]
          }
        },
        {
          "system": false,
          "id": "ovdwcunc",
          "name": "watchers",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": null,
            "displayFields": null
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id = reporter.id || @request.auth.id = assignee.id ||\nwatchers.id ?= @request.auth.id ||\n@request.auth.role = 'audit' || @request.auth.role = 'admin' ||\nlinked_tickets.watchers.id ?= @request.auth.id ||\nlinked_tickets.reporter.id = @request.auth.id ||\nlinked_tickets.assignee.id = @request.auth.id ",
      "viewRule": "@request.auth.id = reporter.id || @request.auth.id = assignee.id ||\nwatchers.id ?= @request.auth.id ||\n@request.auth.role = 'audit' || @request.auth.role = 'admin' ||\nlinked_tickets.watchers.id ?= @request.auth.id ||\nlinked_tickets.reporter.id = @request.auth.id ||\nlinked_tickets.assignee.id = @request.auth.id ",
      "createRule": "",
      "updateRule": "@request.auth.id = reporter.id || @request.auth.role = 'admin'",
      "deleteRule": "@request.auth.id = reporter.id || @request.auth.role = 'admin'",
      "options": {}
    },
    {
      "id": "vgusclq7hjgqgj7",
      "created": "2024-09-01 12:53:27.929Z",
      "updated": "2024-10-02 15:48:53.945Z",
      "name": "commentaries",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "hzjdujap",
          "name": "ticket",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "eeh6yxhgexkzmg7",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "dlytlkjd",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "cxf91yls",
          "name": "text",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "clngje5pthbpv5d",
      "created": "2024-10-02 15:48:53.945Z",
      "updated": "2024-10-02 15:48:53.945Z",
      "name": "reports",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "rtsdqiu6",
          "name": "file",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [],
            "thumbs": [],
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "oxzbdpyq",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "5bxquyza",
          "name": "title",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "am2pqi0ugx2puyu",
      "created": "2024-10-21 19:00:20.288Z",
      "updated": "2024-10-21 19:31:30.976Z",
      "name": "notifications",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "fqs87vbs",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "t5ktvra5",
          "name": "ticket",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "eeh6yxhgexkzmg7",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "pmecepcm",
          "name": "message",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "gyanunzq",
          "name": "viewed",
          "type": "bool",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {}
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    },
    {
      "id": "acpweq6keq9hhmb",
      "created": "2024-10-28 16:38:16.569Z",
      "updated": "2024-10-28 16:42:21.350Z",
      "name": "tickets_history",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "bmijj4cw",
          "name": "ticket",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "eeh6yxhgexkzmg7",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "hgh37jsn",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": false,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "bixwiaab",
          "name": "field",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "osbuo0rp",
          "name": "old_value",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        },
        {
          "system": false,
          "id": "zlle6w4b",
          "name": "new_value",
          "type": "editor",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "convertUrls": false
          }
        }
      ],
      "indexes": [],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})

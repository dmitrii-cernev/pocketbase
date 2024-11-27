/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2024-09-01 12:48:26.852Z",
      "updated": "2024-11-27 15:26:18.467Z",
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
      "updated": "2024-11-27 15:26:18.469Z",
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
      "updated": "2024-11-27 15:26:18.469Z",
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
      "updated": "2024-11-27 15:26:18.469Z",
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
      "updated": "2024-11-27 15:26:18.469Z",
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
      "updated": "2024-11-27 15:26:18.469Z",
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
    },
    {
      "id": "ueyg50uextmql6a",
      "created": "2024-11-20 14:16:38.748Z",
      "updated": "2024-11-27 17:24:03.924Z",
      "name": "tickets_view",
      "type": "view",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "8ex1h6cy",
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
          "id": "wt3ty6ga",
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
          "id": "4bumjesn",
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
          "id": "bzqzp2fx",
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
          "id": "kvz4im4q",
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
          "id": "46qbco4h",
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
          "id": "ovryrxnj",
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
          "id": "tucchlpz",
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
          "id": "v2vigeel",
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
          "id": "hejw61z2",
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
          "id": "zenza6mp",
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
          "id": "4bdvobrm",
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
          "id": "cprgjuod",
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
          "id": "th88tx4q",
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
          "id": "jfxrciqq",
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
          "id": "t0epzfol",
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
          "id": "czmyqy93",
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
          "id": "rjtlad0p",
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
          "id": "fhgsmtbv",
          "name": "assignee_id",
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
          "id": "rqkpcmi6",
          "name": "assignee_name",
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
          "id": "rrkbnl0k",
          "name": "assignee_avatar",
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
          "id": "mhrkz3hr",
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
          "id": "owmxuwyh",
          "name": "reporter_id",
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
          "id": "o8ss30jx",
          "name": "reporter_name",
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
          "id": "hci1nib2",
          "name": "reporter_avatar",
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
          "id": "fp41fvus",
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
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "query": "SELECT \n  t.id AS id,\n  t.title,\n  t.description,\n  t.type,\n  t.status,\n  t.severity_level,\n  t.factor,\n  t.reason,\n  t.financial_loss,\n  t.compensations,\n  t.immediate_actions,\n  t.closing_comments,\n  t.suggestions,\n  t.created,\n  t.updated,\n  t.attachments,\n  t.date_of_discovery,\n  t.date_of_issue_start,\n  t.department_code,\n\n  t.linked_tickets,\n\n  t.assignee,\n  a.id AS assignee_id,\n  a.name AS assignee_name,\n  a.avatar AS assignee_avatar,\n\n  t.reporter,\n  r.id AS reporter_id,\n  r.name AS reporter_name,\n  r.avatar AS reporter_avatar,\n\n  t.watchers\n \n  \nFROM tickets t\nLEFT JOIN users a ON t.assignee = a.id\nLEFT JOIN users r ON t.reporter = r.id"
      }
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})

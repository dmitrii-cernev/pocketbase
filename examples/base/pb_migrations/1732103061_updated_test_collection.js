/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pv8cr6f3be2ol3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u1o0hcmr",
    "name": "test2",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2pv8cr6f3be2ol3")

  // remove
  collection.schema.removeField("u1o0hcmr")

  return dao.saveCollection(collection)
})

onRecordAfterCreateSuccess((e) => {
    e.next()
    let collection = e.app.findCollectionByNameOrId('notifications')
    let record = new Record(collection)

    switch (e.record.collection().name) {
        case 'tickets':
            record.set('user', e.record.get('reporter'))
            record.set('ticket', e.record.id)

            record.set('title', 'New ticket created')
            record.set('message', `New ticket created with id ${e.record.id}`)

            record.set('viewed', false)

            break
        case 'commentaries':
            record.set('user', e.record.get('user'))
            record.set('ticket', e.record.get('ticket'))

            record.set('title', 'New comment created')
            record.set('message', `New comment created on ticket ${e.record.get('ticket')}`)

            record.set('viewed', false)
            break
    }

    e.app.save(record)
}, 'tickets', 'commentaries')

onRecordAfterUpdateSuccess((e) => {
    e.next()

    let collection = e.app.findCollectionByNameOrId('notifications')
    let record = new Record(collection)

    switch (e.record.collection().name) {
        case 'tickets':
            record.set('user', e.record.get('reporter'))
            record.set('ticket', e.record.id)

            record.set('title', 'Ticket updated')
            record.set('message', `Ticket with id ${e.record.id} was updated`)

            record.set('viewed', false)
            break
        case 'commentaries':
            record.set('user', e.record.get('user'))
            record.set('ticket', e.record.get('ticket'))

            record.set('title', 'Comment updated')
            record.set('message', `Comment with id ${e.record.id} was updated`)

            record.set('viewed', false)
            break
    }

    e.app.save(record)
}, 'tickets', 'commentaries')
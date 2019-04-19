const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('unable to connect to the database')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Melissa',
    //     age: 30
    // }, (error, result) => {
    //     if(error){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // }) 

    // db.collection('users').insertMany([
    //     {
    //         name: 'Juliette',
    //         age: 22
    //     },
    //     {
    //         name: 'Madison',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('could not save users')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            description: 'study node',
            completed: false
        },
        {
            description: 'go to krishnas',
            completed: false
        },
        {
            description: 'get interviews',
            completed: false
        }
    ], (error, result) => {
        if(error){
            return console.log('could not insert collection')
        }
        console.log(result.ops)
    })
})
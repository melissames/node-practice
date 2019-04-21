const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('unable to connect to the database')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({ name: 'Melissa' }, (error, user) => {
    //     if(error){
    //         return console.log(error)
    //     }
    //     console.log(user)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5cb93b33a9ab0d1df3afcfe6')
    // }, {
    //     $set: {
    //         name: 'Melissa Sue'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})
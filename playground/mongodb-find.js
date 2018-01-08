//const MongoClient = require('mongodb').MongoClient;


const {
    MongoClient,
    ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }


    console.log('Connected to MongoDB server');

    //    db.collection('Todos').insertOne({
    //        text: 'something todo',
    //        completed: false
    //    }, (err, result) => {
    //        if (err) {
    //            return console.log('Unable to insert todo', err)
    //        }
    //
    //        console.log(JSON.stringify(result.ops, undefined, 2))
    //    });

    //    db.collection('Users').insertOne({
    //        name: 'Bryce',
    //        age: '20',
    //        location: 'Victoria BC'
    //    }, (err, result) => {
    //        if (err) {
    //            return console.log('Unable to connect', err)
    //        }
    //        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    //    });

    db.close();
});

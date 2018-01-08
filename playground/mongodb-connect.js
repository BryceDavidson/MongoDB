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

    //    db.collection('Todos').find({
    //
    //        _id: new ObjectId('5a527fabf6838117f0886204')
    //
    //    }).toArray().then((docs) => {
    //        console.log('Todos');
    //        console.log(JSON.stringify(docs, undefined, 2));
    //    }, (err) => {
    //        console.log('Unable to fetch Todos', err)
    //    });

    //    db.collection('Todos').find().count().then((count) => {
    //        console.log(`Todos count: ${count}`);
    //    }, (err) => {
    //        console.log('Unable to fetch Todos', err)
    //    });

    db.collection('Users').find({
        name: "Cindy"
    }).toArray().then((docs) => {
        console.log('names');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find Docs')
    })

    //db.close();
});

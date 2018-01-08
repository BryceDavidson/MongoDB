//const MongoClient = require('mongodb').MongoClient;


const {
    MongoClient,
    ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    //    db.collection('Todos').findOneAndUpdate({
    //        _id: new ObjectId("5a52a992785cbe3b9ce6909d")
    //    }, {
    //        $set: {
    //            completed: true
    //        }
    //    }, {
    //        returnOriginal: false
    //    }).then((res) => {
    //        console.log(res);
    //    })

    db.collection('Users').findOneAndUpdate({
        name: "bryce"
    }, {
        $set: {
            name: "katie"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    });

    //db.close();
});

//const MongoClient = require('mongodb').MongoClient;


const {
    MongoClient,
    ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    //    db.collection('Todos').deleteMany({
    //        text: "eat lunch"
    //    }).then((result) => {
    //        console.log(result);
    //    });

    //    db.collection('Todos').deleteOne({
    //        text: "eat lunch"
    //    }).then((res) => {
    //        console.log(res);
    //    });

    //    db.collection('Todos').findOneAndDelete({
    //        completed: false
    //    }).then((res) => {
    //        console.log(res);
    //    });

    //    db.collection('Users').deleteMany({
    //        name: "Bryce"
    //    }).then((res) => {
    //        console.log(res);
    //    }, (err) => {
    //        console.log(err);
    //    });

    // deletes one item using the _id object by using the constructor new ObjectId

    //    db.collection('Users').findOneAndDelete({
    //        _id: new ObjectId("5a5280c0ad730a25f4fd9496")
    //    }).then((res) => {
    //        console.log(res)
    //    }, (err) => {
    //        console.log(err)
    //    });

    //db.close();
});

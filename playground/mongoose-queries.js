const {
    ObjectId
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/users');

var id = '5a53f72cc9c702ac18b564b0';
//
//if (!ObjectId.isValid(id)) {
//    console.log('ID not valid')
//};


Todo.find({
    _id: id
}).then((todos) => {
    console.log("Todos", todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});

//all these mongoose methods return functions 
// a promise will return a resolv function and can be passed into the first aurgument of the resolved .then function
//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('id not found');
//    }
//    console.log('Todo by id', todo);
//}).catch((e) => {
//    console.log(e);
//});


User.findById('5a53c59468f199a425517ac8').then((res) => {

    if (!res) {
        return console.log('ID not found')
    }
    console.log('User', res)
}).catch((e) => {
    console.log(e);
});

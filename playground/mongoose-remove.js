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

Todo.remove({}).then((res) => {
    console.log(res);
});

Todo.findByIdAndRemove({}).then((res) => {

}).catch(e) => {
    console.log(e);
};

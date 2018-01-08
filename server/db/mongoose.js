var mongoose = require('mongoose');

//lets mongoose know we want to use promises
mongoose.Promise = global.Promise;
// Mongoose will keep the connection overtime therefor letting us write simpler code
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
};

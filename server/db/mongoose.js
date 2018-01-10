var mongoose = require('mongoose');

//lets mongoose know we want to use promises
mongoose.Promise = global.Promise;
// Mongoose will keep the connection overtime therefor letting us write simpler code
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};

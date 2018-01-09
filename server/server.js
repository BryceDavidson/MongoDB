var express = require('express');
var bodyParser = require('body-parser');
const {
    ObjectId
} = require('mongodb');

// remember to keep a space between local and non-local requires
// we use ES6 Object decuntruction to select a method from the exports of a file
var {
    mongoose
} = require('./db/mongoose');
//this gets the exported mongoose method from the file
var {
    Todo
} = require('./models/todo');
// this gets the exported constructor A.K.A a model from the file
// models are parsed with mongoose and needs mongoose as a depend to work
var {
    User
} = require('./models/users');

// remember to save express as a var as app for better shit and easier coding
var app = express();

// app.use makes sure that between the req and the res this stuff () happens
// so here we are making sure to tell bodyParser that the body we will be getting will be JSON data, and it will parse it as such
app.use(bodyParser.json());

// here we are saying that when there is a POST req to the URL /todos we are going to use the middle ware to parse it, to then feed it into the Todos constructor function A.K.A a "Model" from mongoose and then save it to our DB using todo.save() (after we saved it into a variable to acces easier in scope)

// 
app.post('/todos', (req, res) => {
    var todo = new Todo({
        // here we are saying that the keys of our contructed Todo are = to the parsed JSON data we posted with from post man, A.K.A the body.
        // so text = the text key from the body, parsed thanks to bodyParser
        text: req.body.text,
        completed: req.body.completed
    });
    //here we are saying when the post is created and todo is created we then want to save it into the DB
    todo.save().then((doc) => {
        res.send(doc);
        console.log(JSON.stringify(doc, undefined, 2));
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos,
        })
    }, (err) => {
        res.status(400).send(e);
    });
});
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectId.isValid(id)) {
        return res.status(404).send({
            "this is your id": id
        });
    }

    Todo.findById(id).then((todo) => {

        if (!todo) {
            return res.status(404).send("No To DO");
        }
        console.log(JSON.stringify(todo, undefined, 2));
        res.status(200).send(todo);
    }).catch((e) => {
        res.status(404).send({});
    });
});


app.listen(3000, () => {
    console.log('Server has started on port 3000');
});

module.exports = {
    app
};

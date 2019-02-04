// Initializing Express and server
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/mlv'
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;

//Adding modules
const hbs = require('hbs');
const path = require('path');

//Check connection and post errors
db.once('open', () => {console.log('Connected to MongoDB')});
db.on('error', (err) => {console.log(err)});

//Bring in models
var Users = require('./models/users');

// View Engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Main Page
app.get('/', (req, res) => {
    Users.find({}, (err, Users) => {
        if(err){    
            console.log(err);
        } else {
            res.render('index', {
                title: Users
            });
        }
    });
});

// Registry
app.get('/register', (req, res) => {
    res.render('register.hbs');
});

//Listening in port
app.listen(port, () => console.log(`App initialized on port ${port}!`))
require('dotenv').config();

const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , axios = require('axios');

const controller = require('./controller');

const {
    SERVER_PORT,
    SECRET
} = process.env;


const app = express();

app.use(express.json());
app.use(express.static(__dirname+'/../build'));

massive( process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
    })
    .catch(err => console.log(err));

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}));

app.post('/api/register', controller.register)
app.post('/api/login', controller.login)

app.listen(SERVER_PORT, () => {
    console.log(` you gotta do dis ${SERVER_PORT}`)
})

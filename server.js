const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// folder where all the api routes will be gone
const todos = require('./routes/api/todoitem')

// initialize express
const app = express();

// middleware bodyparser
app.use(bodyParser.json());

// DB configuration
const db = require('./Config/key').mongoURI;

// Connect to database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
})

//get all the api routes for todoList in the separate folder stored in todos variable
app.use('/api/todoitem', todos)

const port = process.env.port || 5000

app.listen(port, () => console.log(`server started at port ${port}`))
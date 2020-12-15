require('dotenv').config();

const express = require('express');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const mongoose = require('mongoose');
const tokenVerify = require('./utils/verifyToken');
const timeout = require('connect-timeout');
const haltOnTimedout = require('./utils/haltOnTimedout');


const app = express();


// middle ware to catch request body
app.use(express.json());

// middlware global
app.use(timeout(120000));
app.use(haltOnTimedout);

// Midleware router
app.use('/api/user', authRoute);
// Middleware router + auth token
app.use('/api/posts',tokenVerify, postsRoute);


app.listen(8081, () => console.log('server up and running'));

// connect mongodb
mongoose.connect("mongodb+srv://wNX8gyoxCvf9gTTt:wNX8gyoxCvf9gTTt@cluster0.noude.mongodb.net/DevEd?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("db connected");
});


const express = require('express');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// to call all variabel in env
dotenv.config();

const app = express();

// connect mongodb
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("db connected");
});
 

// middle ware to catch request body
app.use(express.json());
// Midleware router
app.use('/api/user', authRoute)


app.listen(8081, () => console.log('server up and running'));
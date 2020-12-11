const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const app = express();
//to run express, express run at port 8081
app.listen(8081);

// middlewares. middleware adalah fungsi yang akan selalu dijalankan ketika route dipanggil
// middleware digunakan untuk endpoint

// middleware global
app.use(bodyParser.json());
app.use(cors());


app.use('/posts', postRoute);



// route. penulisan route adalah dengan cara instanc app dot method
app.get("/test", (req,res) => {
    res.send("Hello server from manual route");
})
// end of route

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("db connected");
});
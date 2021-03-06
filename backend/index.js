const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//multer for handling multipart form data / upload file 
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv/config');

const app = express();

const authRouter = require('./routes/auth');
const blogRouter = require('./routes/blog');

const storage = multer.diskStorage({
    destination : (request, file, callback) => {
        //parameter pertama untuk error diisi null, dan parameter kedua dir tempat penyimpanan
        callback(null, 'backend/images');
    },
    filename : (request, file, callback) => {
        //parameter pertama untuk error diisi null, dan parameter kedua nama file
        callback(null, new Date().getTime() + '-' + file.originalname)
    }
})

const fileFilter = (request, file, callback) => {
    if( file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' )
    {
        callback(null, true)
    }else{
        callback(null, false)
    }
}

//untuk parser request body ke json
app.use(bodyParser.json())

//single adalah property json yang dikirim di request body, bisa diganti dengan imageUrl,dll
app.use(multer({storage : storage}).single('image'))

//midleware agar images dapat diakses di localhost
app.use('/backend/images', express.static(path.join(__dirname, '/images')));

//untuk setting CORS
app.use((req, res, next) => {
    // mengizinkan response dari semua url client, atau bisa secara spesifik. contoh :
    // res.setHeader('Access-Control-Allow-Origin', 'https://codepen.io'); <- hanya bisa diakses di codepen
    res.setHeader('Access-Control-Allow-Origin', '*');
    //mengizinkan semua method, method options adalah default dari web browser ketika melakukan fetch akan menjalankan
    // option terlebih dahulu untuk pengecekan
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE, OPTIONS')
    // header apa saja yang diizinkan
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

//  /v1/api/ adalah baseUrl
// app.use('/v1/api', bioRouter); <- example
app.use('/v1/auth', authRouter);
app.use('/v1/blog', blogRouter);

// membuat error global yang dinamis 
app.use( (error, req, res, next ) => {
    const message = error.message;
    const statusCode = error.statusCode || 500;
    const data = error.data;
    const imagePath = error.imagePath;

    if(statusCode != 200 || statusCode != 201){
        if(imagePath) fs.unlinkSync(path.join(__dirname, `images/${imagePath}`));
    }

    res.status(statusCode).json({
        message,
        data
    })
})

//connect mongodb with mongoose library
mongoose.connect(process.env.DB_CONNECTION_BLOG, { useNewUrlParser: true , useUnifiedTopology: true,})
    .then(() => {
        app.listen(3300, () => console.log('success connected'));
    })
    .catch(err => console.log(err))

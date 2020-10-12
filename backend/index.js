const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const authRouter = require('./routes/auth');
const blogRouter = require('./routes/blog');

//untuk parser request body ke json
app.use(bodyParser.json())

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

    res.status(statusCode).json({
        message,
        data
    })
})

app.listen(3300);
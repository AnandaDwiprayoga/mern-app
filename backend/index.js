const express = require('express');

const app = express();

const bioRouter = require('./routes/bio');


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

//   /v1/api/ adalah baseUrl
app.use('/v1/api/', bioRouter);

app.listen(3300);
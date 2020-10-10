const { request } = require('express');
const express = require('express');

const app = express();
// untuk router menangkap perpindahan halaman
const router = express.Router();


//router.use menerima semua method request, get,post,dll
router.use('/bio', (request, response, next) => {
    console.log("url : " + request.originalUrl);
    console.log("method : " + request.method);

    //mengembalikan response json
    const dummyResponse = {
        nama : "ananda dwi prayoga",
        klass: "MI-3D"
    };

    response.json(dummyResponse)
    //next digunakan untuk mengecek route lagi yang sama dan menjalankannya
    next()
});


//router.get khusus menanagani method get, contoh lainnya router.delete, router.put, dll
router.get('/user', (request, response, next) => {
    response.json('this is from get method')
})


//homepage express di set sesuai router
app.use('/', router);

app.listen(3300);
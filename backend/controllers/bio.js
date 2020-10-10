const readBio = (req, res, next ) => {
    //mengembalikan response json
    const dummyResponse = {
        nama : "ananda dwi prayoga",
        klass: "MI-3D"
    };

    res.json(dummyResponse)
    //next digunakan untuk mengecek route lagi yang sama dan menjalankannya
    next()
}

const createBio = (req, res, next ) => {
    const dummyResponse = {
        message : "bio was created successfully"
    }

    res.json(dummyResponse);
    next()
}

module.exports = {
    readBio,
    createBio,
}
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
    //menangkap request body dary client, untuk menangkap request body perlu library body-parser
    console.log(req.body);

    const dummyResponse = {
        message : "bio with name " + req.body.name + " created successfully"
    }

    res.json(dummyResponse);
    next()
}

module.exports = {
    readBio,
    createBio,
}
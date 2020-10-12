const register = (req, res, next ) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const response = {
        message : "Register success",
        data : {
            uid : 1,
            name,
            email,
        }
    }

    console.log(response);

    //201 means post created
    res.status(201).json(response);
}

module.exports = {
    register
}
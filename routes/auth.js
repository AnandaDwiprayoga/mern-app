const { request } = require('express');

const router = require('express').Router();
const UserModel = require('./../models/post');

router.post('/register', (req,res) => {
    const user = new UserModel({

    });
})


module.exports = router;
const express = require('express')
const router = express.Router();

const { readBio, createBio  } = require('./../controllers/bio');

router.get('/bio', readBio)
router.post('/bio', createBio)

module.exports = router
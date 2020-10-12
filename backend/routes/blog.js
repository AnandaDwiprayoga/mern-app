const express = require('express');
const { body } = require('express-validator');
const { createBlogPost } = require('./../controllers/blog');

const router = express.Router();

const validator = [
    body('title').isLength({min : 5}).withMessage('input title min 5 character'),
    body('description').isLength({min : 5}).withMessage('input description min 5 character')
]

router.post('/post', validator , createBlogPost );

module.exports = router;
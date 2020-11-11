const express = require('express');
const { body } = require('express-validator');
const { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPostById } = require('./../controllers/blog');

const router = express.Router();

const validator = [
    body('title').isLength({min : 5}).withMessage('input title min 5 character'),
    body('description').isLength({min : 5}).withMessage('input description min 5 character')
]


router.post('/post', validator , createBlogPost );
router.put('/post', 
            [...validator, body('idBlog').isLength({min : 5}).withMessage('input idBlog min 5 character')], 
            updateBlogPost );
router.get('/posts' , getBlogPosts );
router.get('/post/:idBlog' , getBlogPostById );
router.delete('/post/:idBlog' , deleteBlogPostById );


module.exports = router;
const express = require('express');
const Post = require('../models/post');

const router = express.Router();

// get all
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(400).json({message : error})
    }
})

router.get('/:postId', async (req,res) => {
    const id = req.params.postId;

    try{
        const post = await Post.findById(id);
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({message: error});
    }
})


router.patch('/:postId', async (req,res) => {
    const id = req.params.postId;
    const body = req.body;

    try{
        const post = await Post.updateOne({_id: id}, {$set : body});
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({message: error});
    }
});


router.delete('/:postId', async (req,res) => {
    const id = req.params.postId;

    try{
        const post = await Post.remove({_id : id});
        res.status(200).json(post);
    }catch(error){
        res.status(400).json({message: error});
    }
})



router.post('/', (req,res) => {
    console.log(req.body);
    
    const post = new Post({
    name : req.body.name,
    description: req.body.description,
    age : req.body.age
   });

   post
    .save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({message : error});
    });
});


module.exports = router;
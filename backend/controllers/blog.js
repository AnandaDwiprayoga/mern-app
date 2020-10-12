const { validationResult } = require('express-validator');
const blogPostModel = require('./../models/blog');

const createBlogPost = ( req, res, next ) => {
    
     const validationContainError = validationResult(req);

    if(!validationContainError.isEmpty()){
        const error = new Error('Invalid input format');
        error.statusCode = 400;
        error.data = validationContainError;

        throw error;
    }

    console.log(req.file)
    //checking request file
    if(!req.file){
        const error = new Error('image is required');
        error.statusCode = 422;

        throw error;
    }

    const title = req.body.title;
    // const image = req.body.image;
    const description = req.body.description;
    //mendapatkan url image
    const image = req.file.path

     
    const Posting = new blogPostModel({
        title,
        description,
        image,
        author : {
            uid : 1,
            name : "yoga"
        }
    })

    Posting
        .save()
        .then(result => {
            const response = {
                message : 'Create blog Post success',
                data : result
            }

            res.status(201).json(response);
        })
        .catch(console.log);

}




module.exports = {
    createBlogPost
}
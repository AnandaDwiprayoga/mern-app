const { validationResult } = require('express-validator');

const createBlogPost = ( req, res, next ) => {
    const title = req.body.title;
    // const image = req.body.image;
    const description = req.body.description;

    const validationContainError = validationResult(req);

    if(!validationContainError.isEmpty()){
        const error = new Error('Invalid input format');
        error.statusCode = 400;
        error.data = validationContainError;
        
        throw error;
    }

    const response = {
        message : 'Create blog Post success',
        data : {
            post_id : 1,
            title,
            image : 'image.jpg',
            description,
            created_at : '12/06/2020',
            author : {
                uid : 1,
                name : "yoga"
            }
        }
    }

    res.status(201).json(response);
}




module.exports = {
    createBlogPost
}
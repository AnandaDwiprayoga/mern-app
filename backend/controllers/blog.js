const { validationResult } = require('express-validator');
const blogPostModel = require('./../models/blog');
const path = require('path');
const fs = require('fs');

const createBlogPost = ( req, res, next ) => {

    const validationContainError = validationResult(req);

    _validateInputUser(validationContainError,req.file.filename);

    _checkRequestFile(req);

    const title = req.body.title;
    // const image = req.body.image;
    const description = req.body.description;
    //mendapatkan url image
    const image = req.file.path;
     
    const Posting = new blogPostModel({
        title,
        description,
        image,
        author : {
            uid : 1,
            name : "yoga"
        }
    });

    Posting
        .save()
        .then(result => {
            const response = {
                message : 'Create blog Post success',
                data : result
            }

            res.status(201).json(response);
        })
        .catch(() => {
            const error = new Error('Failed post blog');
            error.statusCode = 400;
            error.imagePath = req.path.filename;
    
            throw error;
        });

}


const updateBlogPost = (req, res, next) => {

    const validationContainError = validationResult(req);

    _validateInputUser(validationContainError, req.file.filename);

    _checkRequestFile(req);

    const title = req.body.title;
    // const image = req.body.image;
    const description = req.body.description;
    const idBlog = req.body.idBlog;
    //mendapatkan url image
    const image = req.file.path;

    _validateId(idBlog, req.file.filename);

    blogPostModel
        //first check blog with this id is exist or not
        .findById(idBlog)
        .then(result => {
            _validateResultDB(result, `Data blog dengan id ${idBlog} tidak ada`, req.file.filename);
            console.log('masuk then 1');

            //update blog and return prmoise
            result.title = title;
            result.description = description;
            result.image = image
            return result.save();   
        })
        .then(result => {
            _validateResultDB(result, `Data blog dengan id ${idBlog} gagal di update`, req.file.filename);

            console.log('masuk then 2');
            res.status(200).json({
                message : `Data blog dengan id ${idBlog} berhasil di update`,
                data : result
            });
        })
        .catch(()=> console.log('masuk catch'));

}


const getBlogPosts = (req, res, next) => {
    blogPostModel
        .find()
        .then(results => res.status(200).json({
            message : 'Data blog posts berhasil dipanggil',
            data : results
        }))
        .catch(next)
}

const getBlogPostById = (req, res, next) => {
    const idBlog = req.params.idBlog;

    _validateId(idBlog);

    blogPostModel
        .findById(idBlog)
        .then(result => {
            _validateResultDB(result, `Data blog dengan id ${idBlog} tidak ada`);

            res.status(200).json({
                message : `Data blog dengan id ${idBlog} berhasil dipanggil`,
                data : result
            });
        })
        .catch(next);
}

const deleteBlogPostById = (req, res, next) => {
    const idBlog = req.params.idBlog;

    _validateId(idBlog);

    blogPostModel
        .findByIdAndDelete(idBlog)
        .then(result => {
            _validateResultDB(result, `Gagal hapus blog dengan id ${idBlog}`)

            fs.unlinkSync(path.join(__dirname, `../../${result.image}`));
            
            res.status(200).json({
                message : `Berhasil hapus blog dengan id ${idBlog}`,
                data : result
            });
        })
        .catch(next);
}



function _validateInputUser(validationContainError, imagePath){
    if(!validationContainError.isEmpty()){
        const error = new Error('Invalid input format');
        error.statusCode = 400;
        error.data = validationContainError;
        error.imagePath = imagePath;

        throw error;
    }
}

function _checkRequestFile(req){
    //checking request file
    if(!req.file){
        const error = new Error('image is required');
        error.statusCode = 422;

        throw error;
    }
}

function _validateId(idBlog, imagePath = null){
    // ref : https://stackoverflow.com/questions/14940660/whats-mongoose-error-cast-to-objectid-failed-for-value-xxx-at-path-id
    // id pada mongodb harus sesuai dengan pattern dibawah ini
    if (!idBlog.match(/^[0-9a-fA-F]{24}$/)) {
        const error = new Error(`Id kamu tidak sesuai dengan pola`);
        error.statusCode = 400;
        error.imagePath = imagePath;
        throw error;
    }
}

function _validateResultDB(result, messageFail, imagePath = null){
    if(!result){
        const error = new Error(messageFail);
        error.statusCode = 404;
        error.imagePath = imagePath;

        throw error;
    }
}

module.exports = {
    createBlogPost,
    getBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPostById
}
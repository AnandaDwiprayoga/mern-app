const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "user",
    },
    description: String,
    age: Number
});

                // membuat model dengan nama Posts pada mongoDB
module.exports = mongoose.model('Posts', PostSchema);
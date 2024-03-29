const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', Post);
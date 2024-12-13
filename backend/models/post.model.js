const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titlePost: {
        type: String,
        required: true
    },
    contentPost: {
        type: String,
        required: true
    },
    imagePost: {
        type: [String],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Post', postSchema);
const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    hobbies: {
        type: String,
        required: true
    },
    LifeMotto: {
        type: String,
        required: true
    },
    toGo: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Profile', profileSchema);
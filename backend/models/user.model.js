const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    isVerified:
    {
        type: Boolean,
        default: false
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
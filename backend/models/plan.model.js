const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    contentPlan: {
        type: String,
        required: true
    },
    statusPlan: {
        type: Boolean,
        required: true
    },
    statusComplete: {
        type: Boolean,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Plan', planSchema);
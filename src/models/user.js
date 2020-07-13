const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    satus: {
        type: Number,
        default: 10
    }
}, {
    collection: 'user',
    timestamps: true
})

const User = mongoose.model('User', schema);

module.exports = User;
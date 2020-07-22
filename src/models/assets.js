const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
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
    collection: 'assets',
    timestamps: true
})

schema.plugin(mongoosePaginate)

const Assets = mongoose.model('Assets', schema);

module.exports = Assets;
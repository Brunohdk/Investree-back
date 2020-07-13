const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

let schema = new mongoose.Schema({
    asset: {
        type: String,
        unique: true,
        required: true,
        uppercase: true
    },
    amount: {
        type: Number,
        required: true,
        lowercase: true
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
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
    collection: 'dataTable',
    timestamps: true
})

schema.plugin(mongoosePaginate)

const DataTable = mongoose.model('DataTable', schema);

module.exports = DataTable;
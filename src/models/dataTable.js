const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

let schema = new mongoose.Schema({
    asset: {
        type: String,
        required: true,
        uppercase: true
    },
    amount: {
        type: Number,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    saw: [
        {
            amount: {
                type: Number,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
            date: {
                type: String,
                required: true,
                select: false
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
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
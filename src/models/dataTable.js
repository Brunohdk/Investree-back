const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')

let schema = new mongoose.Schema({
    asset: {
        type: String,
        required: true,
        uppercase: true
    },
    amountTotal: {
        type: Number,
        required: true,
    },
    valueAverage: {
        type: Number,
        required: true,
    },
    startedPositionAt: {
        type: Date,
        required: true
    },
    bought: [
        {
            amount: {
                type: Number,
                required: true,
            },
            value: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true
            }
        }
    ],
    sold: [
        {
            amount: {
                type: Number,
                required: true,
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
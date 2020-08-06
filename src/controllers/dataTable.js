const router = require('express').Router();
const DataTable = require('../models/dataTable');

router.route('/').get((req, res) => {
    DataTable.find()
        .then(dataTable => res.json(dataTable))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
    DataTable.findById(req.params.id)
        .then(dataTable => res.json(dataTable))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req, res) => {
    DataTable.findByIdAndDelete(req.params.id)
        .then(dataTable => res.json(dataTable))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').put((req, res) => {
    DataTable.findById(req.params.id)
        .then(dataTable => {
            const { asset, 
                bought, 
                amountTotal, 
                valueAverage, 
                startedPositionAt,
                sold,
                status,
                createdAt 
            } = req.body

            dataTable.asset = asset
            dataTable.bought = bought
            dataTable.amountTotal = amountTotal
            dataTable.valueAverage = valueAverage
            dataTable.startedPositionAt = startedPositionAt
            dataTable.sold = sold
            dataTable.status = status
            dataTable.createdAt = dataTable.createdAt

            dataTable.save()
                .then(() => res.json('Data updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/').post((req, res) => {
    const { asset, 
        bought, 
        amountTotal, 
        valueAverage, 
        startedPositionAt 
    } = req.body

    const newDataTable = new DataTable({
        asset, 
        amountTotal,
        valueAverage,
        startedPositionAt,
        bought
    })

    newDataTable.save()
        .then(() => res.json('dataTable added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))

});

module.exports = router
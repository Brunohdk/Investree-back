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
            const { asset, amount, value, date, status, saw } = req.body

            console.log(saw)

            dataTable.asset = asset
            dataTable.amount = amount
            dataTable.value = value
            dataTable.date = date
            dataTable.status = status
            dataTable.saw = saw
            dataTable.createdAt = dataTable.createdAt

            dataTable.save()
                .then(() => res.json('Data updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/').post((req, res) => {
    const { asset, amount, value, date } = req.body
    
    const newDataTable = new DataTable({
        asset, 
        amount,
        value, 
        date
    })

    newDataTable.save()
        .then(() => res.json('dataTable added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))

});

module.exports = router
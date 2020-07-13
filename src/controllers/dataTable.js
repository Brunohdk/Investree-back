const router = require('express').Router();
const DataTable = require('../models/dataTable');

router.route('/').get((req, res) => {
    DataTable.find()
        .then(dataTable => res.json(dataTable))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/').post((req, res) => {
    const { asset, amount, value, date, createdAt, status } = req.body

    const newDataTable = new DataTable({
        asset, 
        amount,
        value, 
        date, 
        createdAt, 
        status
    })

    newDataTable.save()
        .then(() => res.json('dataTable added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))

});

module.exports = router
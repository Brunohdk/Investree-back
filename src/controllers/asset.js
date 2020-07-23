const router = require('express').Router();
const Asset = require('../models/asset');

router.route('/').get((req, res) => {
    Asset.find()
        .then(asset => {
            asset.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)

            res.json(asset)
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').get((req, res) => {
    Asset.findById(req.params.id)
        .then(asset => res.json(asset))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req, res) => {
    Asset.findByIdAndDelete(req.params.id)
        .then(asset => res.json(asset))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').put((req, res) => {
    Asset.findById(req.params.id)
        .then(asset => {
            const { name} = req.body

            asset.name = name
            asset.status = status
            asset.createdAt = asset.createdAt

            asset.save()
                .then(() => res.json('Asset updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/').post((req, res) => {
    const { name, createdAt, status } = req.body

    const newAsset = new Asset({
        name,
        createdAt, 
        status
    })

    newAsset.save()
        .then(() => res.json('Asset added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))

});

module.exports = router
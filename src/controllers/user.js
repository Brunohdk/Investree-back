const router = require('express').Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/').post((req, res) => {
    const { username, email } = req.body

    User.findOne({ username, email })
        .then(oldUser => {
            if(oldUser) {
                return res.status(400).send({error: 'User already exists'})
            } else {
                const { username, email, password, createdAt, status } = req.body

                const newUser = new User({
                    username, 
                    email, 
                    password, 
                    createdAt, 
                    status
                })

                newUser.save()
                    .then(() => res.json('User added!'))
                    .catch(err => res.status(400).json(`Error: ${err}`))
            }
        })
});

module.exports = router
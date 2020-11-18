const express = require('express');
const User = require('../models/user');
const Users = require('../models/user');
const router = express.Router();

//Get all users

router.get('/', (req, res) => {
	Users.find({}).then((user) => {
		res.json(user);
	});
});

//Find one user
router.get('/:id', (req, res) => {
	Users.findById({ _id: req.params.id }).then((user) => {
		res.json(user);
	});
});

//Post (create a user)
router.post('/', (req, res) => {
	Users.create(req.body).then((user) => {
		res.json(user);
	});
});
//Patch ( edit a user)
router.patch('/:id', (req, res) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(user) => {
			res.json(user);
		}
	);
});
// Delete a user
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete({_id: req.params.id}).then((user) => {
        res.json(user)
    })
})
module.exports = router;
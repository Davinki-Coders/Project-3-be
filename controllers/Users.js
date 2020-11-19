const express = require('express');
const User = require('../models/user');
const Users = require('../models/user');
const router = express.Router();

//Get all users

router.get('/', (req, res, next) => {
	Users.find({}).then((user) => {
		res.json(user);
	})
	.catch(next)
});

//Find one user
router.get('/:id', (req, res, next) => {
	Users.findById({ _id: req.params.id }).then((user) => {
		res.json(user);
	})
	.catch(next)
});

//Post (create a user)
router.post('/', (req, res, next) => {
	Users.create(req.body).then((user) => {
		res.json(user);
	})
	.catch(next)
});
//Patch ( edit a user)
router.patch('/:id', (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
		(user) => {
			res.json(user);
		}
	)
	.catch(next)
});
// Delete a user
router.delete('/:id', (req, res, next) => {
    User.findByIdAndDelete({_id: req.params.id}).then((user) => {
        res.json(user)
	})
	.catch(next)
})
module.exports = router;
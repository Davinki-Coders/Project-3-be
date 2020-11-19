const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');

//POST /api/signup
router.post('/signup', (req, res, next) => {
	bcrypt
		.hash(req.body.password, 10)
		.then((hash) => {
			return { ...req.body, password: hash };
		})
		.then((user) => User.create(user))
		.then((user) => res.status(201).json(user))
		.catch(next);
});

//Sign In
router.post('/login', (req, res, next) => {});

//Get all users

router.get('/', (req, res, next) => {
	User.find({})
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});

//Find one user
router.get('/:id', (req, res, next) => {
	User.findById({ _id: req.params.id })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});

//Post (create a user)
router.post('/', (req, res, next) => {
	User.create(req.body)
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});
//Patch ( edit a user)
router.patch('/:id', (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});
// Delete a user
router.delete('/:id', (req, res, next) => {
	User.findByIdAndDelete({ _id: req.params.id })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});
module.exports = router;

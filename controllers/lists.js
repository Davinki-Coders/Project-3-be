const express = require('express');
const router = express.Router();
const List = require('../models/list');
const User = require('../models/user');
const { requireToken } = require('../middleware/auth');

// Index: Get all List (Read)

router.get('/', (req, res, next) => {
	List.find({})
		.then((lists) => res.json(lists))
		.catch(next);
});

// Create

router.post('/', requireToken, (req, res, next) => {
	List.create(req.body)
		.then((list) => {
			res.status(201).json(list);
		})
		.catch(next);
});

// Update

router.patch('/:id', requireToken, (req, res, next) => {
	List.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((list) => {
			if (!list) {
				res.sendStatus(404);
			} else {
				res.json(list);
			}
		})
		.catch(next);
});

// Delete

router.delete('/:id', requireToken, (req, res, next) => {
	List.findOneAndRemove({ _id: req.params.id })
		.then((list) => {
			if (!list) {
				res.sendStatus(404);
			} else {
				res.sendStatus(204);
				// res.json(list)
			}
		})
		.catch(next);
});

module.exports = router;

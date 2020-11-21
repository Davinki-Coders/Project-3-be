const mongoose = require('../db/connection');

const ListSchema = new mongoose.Schema({
	title: {
		type: String,
		// unique: true,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	imageUrl: String,
	owner: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId, // check this
	},
	author: {
		type: String,
		required: true,
	},
	games: {
		required: true,
		type: [
			{
				id: Number,
				name: String,
				image: String,
			},
		],
	},
});

const List = mongoose.model('List', ListSchema);

module.exports = List;

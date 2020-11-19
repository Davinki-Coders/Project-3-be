const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
	title: {
		type: String,
		// unique: true,
		required: true,
	},
	author: String,
	description: {
		type: String,
		required: true,
	},
	imageUrl: String,
	owner: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId, // check this
	},
	games: {
		required: true,
		type: [Number],
	},
});



const UserSchema = new Schema({
	name: String,
	username: {
		type:String,
		unique: true,
	},
	email: { type: String, unique: true },
	password: String,
	list: [listSchema]
});


const User = mongoose.model('User', UserSchema);


module.exports = User;

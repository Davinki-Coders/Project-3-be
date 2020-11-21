const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

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
		required: true,
		type: mongoose.Schema.Types.ObjectId, // check this
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

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: { type: String, unique: true },
		password: String,
		list: [ListSchema],
	},
	{
		toJSON: {
			virtuals: true,
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

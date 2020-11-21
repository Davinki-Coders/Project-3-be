const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
		},
		email: { type: String, unique: true },
		password: String,
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

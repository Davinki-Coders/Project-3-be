const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	email: { type: String, unique: true },
	password: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

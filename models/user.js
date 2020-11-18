const mongoose = require('../db/connection');

const Schema = mongoose.Schema;

const listSchema = require('./list')



const UserSchema = new Schema({
	name: String,
	email: { type: String, unique: true },
	password: String,
	list: [listSchema]
});


const User = mongoose.model('User', UserSchema);


module.exports = User;

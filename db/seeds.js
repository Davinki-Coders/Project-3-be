const List = require('../models/list');
const User = require('../models/user');

const listSeedData = require('./list.json');

const userSeedData = require('./user.json');

User.deleteMany({})
	.then(() => User.create(userSeedData))
	.then((user) => {
		List.deleteMany({})
			.then(() => {
				return List.create([
					{
						...listSeedData,
						owner: user._id,
					},
				]);
			})
			.then(console.log)
			.catch(console.error)
			.finally(() => {
				process.exit();
			});
	})
	.then(console.log)
	.catch(console.error);

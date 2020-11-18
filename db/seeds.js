const List = require('../models/list')
const User = require('../models/user')

const listSeedData = require('./list.json'); 

const userSeedData = require('./user.json'); 

List.deleteMany({}).then(() => {
    return List.insertMany(listSeedData);
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit();
}); 

User.deleteMany({})
.then(() => {
    return User.insertMany(userSeedData);
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit();
});


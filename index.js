const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start of controllers
const ListsController = require('./controllers/lists');

app.use('/api/lists/', ListsController);

const UsersController = require('./controllers/users');
app.use('/api/users/', UsersController);
// End of controllers

app.get('/test', (req, res) => {
	res.send('server is working');
});

app.set('port', process.env.PORT || 8001);
console.log('this is great');

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

//

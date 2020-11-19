const mongoose = require("mongoose");

const mongoURI = (process.env.NODE_ENV === "production"
	? process.env.DB_URL
	: "mongodb://localhost/davinkicode");

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
    .then(() => {
        console.log("connected to the database");
    })
    .catch(console.error)

module.exports = mongoose
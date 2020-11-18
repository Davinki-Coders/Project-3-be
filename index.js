const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start of controllers
const ListsController = require("./controllers/lists");
app.use("/api/list/", ListsController);
// End of controllers


app.get("/", (req, res) => {
	res.redirect("/api/list");
});

app.set("port", process.env.PORT || 8001);

app.listen(app.get("port"), () => {
	console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

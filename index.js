const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const heroListsController = require("./controllers/hero-lists");
app.use("/api/herolist", heroListsController);
app.get("/", (req, res) => {
	res.redirect("/api/herolist");
});
app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
	console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

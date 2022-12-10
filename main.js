const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// define a simple route
app.get("/", (req, res) => {
	res.json({ message: "Bienvenue sur mon application" });
});

require("./routes/users.routes.js")(app);
require("./routes/groupes.routes.js")(app);

// listen for requests
app.listen(4000, () => {
	console.log("Server is listening on port 4000");
});

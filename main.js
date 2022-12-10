const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json({ message: "Bienvenue sur mon application nodeJS" });
});

require("./routes/users.routes.js")(app);
require("./routes/groupes.routes.js")(app);

// listen for requests
app.listen(4000, () => {
	console.log("Server is listening on port 4000");
});

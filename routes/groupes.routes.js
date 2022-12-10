module.exports = (app) => {
	const groupes = require("../controllers/groupes.controllers");

	// Retrieve all todos
	app.get("/groupes", groupes.findAll);
};

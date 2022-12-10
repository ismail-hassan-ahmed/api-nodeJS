module.exports = (app) => {
	const users = require("../controllers/users.controller.js");

	// Create a new todo
	app.post("/users", users.create);

	// Retrouver tous utilisateurs par un prenom
	app.get("/users", users.findAll);

	// Retrieve a single todo by id
	app.get("/users/:id", users.findOne);

	// Update a Todo with id
	app.put("/users/:id", users.update);

	// Delete a Todo by id
	app.delete("/users/:id", users.delete);
};

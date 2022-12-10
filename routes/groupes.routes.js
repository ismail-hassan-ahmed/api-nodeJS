module.exports = (app) => {
	const groupes = require("../controllers/groupes.controllers");

	// Retrouver tous les groupes
	app.get("/groupes", groupes.findAll);
};

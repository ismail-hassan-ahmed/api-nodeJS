const connection = require("../config/database.js");

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
	connection.query(
		"select name from groupes",
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

const connection = require("../config/database.js");

exports.findAll = (req, res) => {
	connection.query(
		"SELECT name from groupes",
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

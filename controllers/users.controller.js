const connection = require("../config/database.js");

// Create and Save a new Todo
exports.create = (req, res) => {
	// Validate request
	if (!req.body) {
		return res.status(400).send({
			message: "Todo description can not be empty",
		});
	}

	var params = req.body;
	console.log(params);

	connection.query(
		"INSERT INTO users SET ? ",
		params,
		function (error, results, fields) {
			if (error) throw error;
			return res.send({
				data: results,
				message: "Vous avez été enregistré avec succés.",
			});
		}
	);
};

// Retrieve and return all todos from the database.
exports.findAll = (req, res) => {
	connection.query(
		"select firstname, lastname from users",
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

// Find a single todo with a id
exports.findOne = (req, res) => {
	connection.query(
		"select firstname, lastname, email, groupes from users where Id=?",
		[req.params.id],
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

// Update a todo identified by the id in the request
exports.update = (req, res) => {
	// Validate Request
	if (!req.body) {
		return res.status(400).send({
			message: "Todo description can not be empty",
		});
	}

	// console.log(req.params.id);
	// console.log(req.body.firstname);
	connection.query(
		"UPDATE users SET firstname= ?, lastname= ?, email= ?, password= ?, created_at= ?, updated_at= ? where id= ?",
		[
			req.body.firstname,
			req.body.lastname,
			req.body.email,
			req.body.password,
			req.body.created_at,
			req.body.updated_at,
			req.params.id,
		],
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

// Delete a todo with the specified id in the request
exports.delete = (req, res) => {
	console.log(req.body);
	connection.query(
		"DELETE FROM `users` WHERE `id`=?",
		[req.body.id],
		function (error, results, fields) {
			if (error) throw error;
			res.end("Record has been deleted!");
		}
	);
};

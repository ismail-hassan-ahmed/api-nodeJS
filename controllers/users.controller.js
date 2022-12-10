const connection = require("../config/database.js");

// Creer un user
exports.create = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Les champs ne doivent pas être vides",
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

// Retrouver tous les users
exports.findAll = (req, res) => {
	connection.query(
		"SELECT firstname, lastname from users",
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

// Trouver un user
exports.findOne = (req, res) => {
	connection.query(
		"SELECT firstname, lastname, email, groupes from users where Id=?",
		[req.params.id],
		function (error, results, fields) {
			if (error) throw error;
			res.end(JSON.stringify(results));
		}
	);
};

// Modifier un user
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Les champs ne doivent pas être vides",
		});
	}

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

// Supprimer un user
exports.delete = (req, res) => {
	console.log(req.body);
	connection.query(
		"DELETE FROM `users` WHERE `id`=?",
		[req.body.id],
		function (error, results, fields) {
			if (error) throw error;
			res.end("Un utilisateur a été supprimé");
		}
	);
};

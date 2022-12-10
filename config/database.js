const mysql = require("mysql");
// configuration de la base de données
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodeapi",
});

// connect to database
connection.connect(function (err) {
	if (err) throw err;
	console.log("Vous êtes bien connecté à la base de données...");
});

module.exports = connection;

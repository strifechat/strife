var password;

fs = require('fs')
fs.readFile('./password', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  password = String(data);

  connect();
});

var mysql = require('mysql');
var connection;

function connect() {
	console.log("connection: " + connection);
	connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : password,
		database : 'strife_db'
	});
	console.log("connection: " + connection);

	test();
}

function test() {
	console.log("connection: " + connection);
	connection.connect();

	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
		if (err) throw err;

	console.log('The solution is: ', rows[0].solution);
	});

	connection.end();
}


Create a connection.js file inside config directory.
Inside the connection.js file, setup the code to connect Node to MySQL.
Export the connection.


// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "12345",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
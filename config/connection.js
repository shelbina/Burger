// Node Dependency
var mysql = require('mysql');
var connection;
var JAWSDB_URL = mysql:swg5sv3v5c9ku65q:x4m1xnox6onpsu44@cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mizc089jp0b7ut6s

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'burgers_db',
    });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export the Connection
module.exports = connection;
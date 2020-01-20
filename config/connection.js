var mysql = require("mysql");

var connection;
// setting connection to mysql
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
  
    user: "root",
    password: "Nehasi17",
    database: "burgers_db"
  });
};

// .connect method connects to mysql
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exporting so that we have access to mysql outside of this file
module.exports = connection;  
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rlaalstjr12",
  database: "fintec",
});

connection.connect();

connection.query("SELECT * FROM user;", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

connection.end();

const mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "forest",
  password: "",
  database: "module_modal"
});

con.connect(err => {
  if (err) throw err;
  console.log("db is running");
});

module.exports = con;

const mysql = require("mysql");

// Create MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kmc",
  });

  db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
  });

  module.exports = db;
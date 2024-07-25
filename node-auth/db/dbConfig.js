require("dotenv").config();

const mysql = require("mysql");

// Create MySQL connection
// const db = mysql.createConnection({
//     host: process.env.MYSQLHOST,
//     user: process.env.MYSQLUSER,
//     password: process.env.MYSQLPASSWORD,
//     database: process.env.MYSQLDATABASE,
//   });
const db = mysql.createConnection(process.env.MYSQL_URL)
  db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
  });

  module.exports = db;
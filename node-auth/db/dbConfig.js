require("dotenv").config();

const mysql = require("mysql");

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected...");
  });

  module.exports = db;
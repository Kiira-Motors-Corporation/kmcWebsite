// controllers/userController.js
const db = require("../db/dbConfig")


const getCoach = (req, res) => {
  const { min, max } = req.query;
  let sql = "SELECT * FROM COACH";

  if (min && max) {
    sql += " WHERE id BETWEEN ? AND ?";
  }
  db.query(sql, [min, max], (err, results) => {
    if (err) {
      console.error("Error fetching coach:", err);
      res.status(500).json({ error: "Error fetching coach"});
    } else {
      res.json(results);
    }
  });
}


const getSingleCoach = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM coach WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error fetching evs:", err);
      res.status(500).json({ error: "Error fetching coach" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Coach not found" });
    } else {
      res.json(results[0]);
    }
  });
}


  module.exports = {
    getCoach,
    getSingleCoach
  };

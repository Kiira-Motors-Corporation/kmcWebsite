// controllers/userController.js
const db = require("../db/dbConfig")


const getEvsOrders = (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT * FROM evs_orders WHERE user_id = ?`;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching evs_orders items:", err);
      res.status(500).json({ error: "Error fetching evs_orders items" });
    } else {
      res.json(results);
    }
  });
}


const createEvsOrders =  (req, res) => {
  const { name, colors, capacities, userId } = req.body;

  const sql = `
    INSERT INTO evs_orders (name, exteriorColor, interiorColor, floorTrim, capacity, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      colors.exteriorColor,
      colors.interiorColor,
      colors.floorTrim,
      capacities.capacity,
      userId,
    ],
    (err, results) => {
      if (err) {
        console.error("Error adding/updating evs_orders item:", err);
        res
          .status(500)
          .json({ error: "Error adding/updating evs_orders item" });
      } else {
        res.json({ success: true });
      }
    }
  );
}


  module.exports = {
    getEvsOrders,
    createEvsOrders
  };

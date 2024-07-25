// controllers/userController.js



const getEVS = (req, res) => {
  const { min, max } = req.query;
  let sql = "SELECT * FROM evs";

  if (min && max) {
    sql += " WHERE id BETWEEN ? AND ?";
  }
  db.query(sql, [min, max], (err, results) => {
    if (err) {
      console.error("Error fetching evs:", err);
      res.status(500).json({ error: "Error fetching evs" });
    } else {
      res.json(results);
    }
  });
}


const getSingleEVS = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM evs WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error fetching evs:", err);
      res.status(500).json({ error: "Error fetching evs" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Evs not found" });
    } else {
      res.json(results[0]);
    }
  });
}


  module.exports = {
    getEVS,
    getSingleEVS
  };

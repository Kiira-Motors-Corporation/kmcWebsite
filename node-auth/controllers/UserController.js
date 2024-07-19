// controllers/userController.js
const db = require("../db/dbConfig");
const bcrypt = require("bcryptjs");

const getUsers = (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ error: "Error fetching users" });
      return;
    }
    res.json(results);
  });
};

const createUser = async (req, res) => {
  const { username, fname, lname, email, country, phone, category, password } =
    req.body;

  // Validate inputs
  if (
    !username ||
    !fname ||
    !lname ||
    !email ||
    !country ||
    !phone ||
    !category ||
    !password
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user already exists
  const userCheckQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
  db.query(userCheckQuery, [username, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const query =
      "INSERT INTO users (username, fname, lname, email, country, phone, category, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [username, fname, lname, email, country, phone, category, hashedPassword],
      (err, result) => {
        if (err) throw err;
        res.redirect("/login");
      }
    );
  });
};

const loginUser = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send("Invalid Password");
    }

    req.session.user = user;
    res.send({ loggedIn: true, user });
  });
};


const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.send({ loggedIn: false });
    }
  });
}

module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser
};

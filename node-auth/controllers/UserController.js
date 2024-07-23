// controllers/userController.js
const db = require("../db/dbConfig");
const bcrypt = require("bcryptjs");
const {Users} = require("../models")

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

//   const { username, fname, lname, email, country, phone, category, password } =
//     req.body;

//   // Validate inputs
//   if (
//     !username ||
//     !fname ||
//     !lname ||
//     !email ||
//     !country ||
//     !phone ||
//     !category ||
//     !password
//   ) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Check if user already exists
//   const userCheckQuery = "SELECT * FROM users WHERE username = ? OR email = ?";
//   db.query(userCheckQuery, [username, email], (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database query error" });
//     }
//     if (results.length > 0) {
//       return res.status(409).json({ error: "User already exists" });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 8);

//     const query =
//       "INSERT INTO users (username, fname, lname, email, country, phone, category, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
//     db.query(
//       query,
//       [username, fname, lname, email, country, phone, category, hashedPassword],
//       (err, result) => {
//         if (err) throw err;
//         res.redirect("/login");
//       }
//     );
//   });
// };

const createUser = async (req, res) => {
  const { name, email, contact, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await Users.create({
      name,
      email,
      contact,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }

};

const loginUser = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ where: { name } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Assuming you want to send some user information as response
    req.session.user = user;
    res.status(200).json({
      message: 'Login successful',
      loggedIn: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        contact: user.contact
      }
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Error logging in user' });
  }
};


const logoutUser = (req, res) => {
  try {
    // Destroy the user session
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ error: 'Error logging out' });
      }

      // Send a successful response
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ error: 'Error logging out user' });
  }
}

const checkSession =(req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ user: null });
  }
}

module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
  checkSession
};

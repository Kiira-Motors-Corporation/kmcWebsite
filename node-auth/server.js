require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const PdfPrinter = require("pdfmake");
const fs = require("fs");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const randomstring = require("randomstring");
const secretKey = randomstring.generate(32);

const puppeteer = require("puppeteer");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors())
// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "kmc",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

const sessionStore = new MySQLStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "kmc",
});

app.use(
  session({
    key: "my_app_session",
    secret: secretKey, // Change this to a random secret key
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      sameSite: "lax",
    },
  })
);

// // Middleware to verify user authentication
// const authenticateUser = (req, res, next) => {
//   // Implement your authentication logic here (e.g., check session or token)
//   const { userId } = req.body; // Assuming userId is passed in request body
//   if (!userId) {
//       return res.status(401).json({ error: 'Unauthorized' });
//   }
//   req.userId = userId;
//   next();
// };

//sending email
app.post("/api/send-email", (req, res) => {
  const { pdfData } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jonathandevops34@gmail.com", //smtp server gmail
      pass: "wjfl rrox mlwg wwpl",
    },
  });

  const mailOptions = {
    from: email,
    to: "jonathandevops34@gmail.com", //kmc email
    subject: "Product Information PDF",
    text: `Here is the product information PDF.`,

    attachments: [
      {
        filename: "product-information.pdf",
        content: pdfData.split("base64,")[1],
        encoding: "base64",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

app.post("/quote", (req, res) => {
  const {
    name,
    phoneNumber,
    email,
    selectedExteriorColor,
    selectedInteriorColor,
    selectedFloorTrim,
  } = req.body;

  const fonts = {
    Roboto: {
      normal: path.join(__dirname, "fonts/Roboto-Regular.ttf"),
      bold: path.join(__dirname, "fonts/Roboto-Bold.ttf"),
      italics: path.join(__dirname, "fonts/Roboto-Italic.ttf"),
      bolditalics: path.join(__dirname, "fonts/Roboto-BoldItalic.ttf"),
    },
  };

  const printer = new PdfPrinter(fonts);

  const docDefinition = {
    content: [
      { text: "Quote Details", style: "header" },
      `Name: ${name}`,
      `Phone Number: ${phoneNumber}`,
      `Email: ${email}`,
      `Exterior Color: ${selectedExteriorColor}`,
      `Interior Color: ${selectedInteriorColor}`,
      `Floor Trim: ${selectedFloorTrim}`,
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  const pdfDoc = printer.createPdfKitDocument(docDefinition);
  let chunks = [];

  pdfDoc.on("data", (chunk) => {
    chunks.push(chunk);
  });

  pdfDoc.on("end", () => {
    const pdfBuffer = Buffer.concat(chunks);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="quote.pdf"',
    });
    res.send(pdfBuffer);
  });

  pdfDoc.end();
});

// Get all items
app.get("/items", (req, res) => {
  const { min, max } = req.query;
  let sql = "SELECT * FROM items";

  if (min && max) {
    sql += " WHERE id BETWEEN ? AND ?";
  }
  db.query(sql, [min, max], (err, results) => {
    if (err) {
      console.error("Error fetching items:", err);
      res.status(500).json({ error: "Error fetching items" });
    } else {
      res.json(results);
    }
  });
});

// Get all evs
app.get("/EVS", (req, res) => {
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
});

// Get all
app.get("/COACH", (req, res) => {
  const { min, max } = req.query;
  let sql = "SELECT * FROM coach";

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
});

// Get a single item by ID
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM items WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Error fetching item:", err);
      res.status(500).json({ error: "Error fetching item" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Item not found" });
    } else {
      res.json(results[0]);
    }
  });
});

// Get a single evs by ID
app.get("/evs/:id", (req, res) => {
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
});

// Get a single evs by ID
app.get("/coach/:id", (req, res) => {
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
});

// Add item to cart

app.post("/cart", (req, res) => {
  const { userId, itemId, quantity } = req.body;
  const sql = `
  INSERT INTO cart_items (user_id, item_id, quantity)
  VALUES (?, ?, ?)
  ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
`;
  db.query(sql, [userId, itemId, quantity], (err, results) => {
    if (err) {
      console.error("Error adding/updating cart item:", err);
      res.status(500).json({ error: "Error adding/updating cart item" });
    } else {
      res.json({ success: true });
    }
  });
});


//ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
// Route to handle order creation
app.post('/evs_orders', (req, res) => {
  const { name, colors, capacities, userId } = req.body;

  const sql = `
    INSERT INTO evs_orders (name, exteriorColor, interiorColor, floorTrim, capacity, user_id)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    name,
    colors.exteriorColor,
    colors.interiorColor,
    colors.floorTrim,
    capacities.capacity,
    userId
  ], (err, results) => {
    if (err) {
      console.error("Error adding/updating evs_orders item:", err);
      res.status(500).json({ error: "Error adding/updating evs_orders item" });
    } else {
      res.json({ success: true });
    }
  });
});

// Add this new GET endpoint
app.get("/evs_orders/:userId", (req, res) => {
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
});

//ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
//post new orders
app.post("/coach_orders", (req, res) => {
  const { name, colors, capacities, userId } = req.body;
  const sql = `
  INSERT INTO coach_orders (name,exteriorColor,interiorColor,floorTrim,capacity,user_id)
  VALUES (?, ?, ?, ?, ?, ?)

`;
db.query(sql, [
  name,
  colors.exteriorColor,
  colors.interiorColor,
  colors.floorTrim,
  capacities.capacity,
  userId
], (err, results) => {
    if (err) {
      console.error("Error adding/updating evs_orders item:", err);
      res.status(500).json({ error: "Error adding/updating coach_orders item" });
    } else {
      res.json({ success: true });
    }
  });
});

// Add this new GET endpoint
app.get("/coach_orders/:userId", (req, res) => {
  const userId = req.params.userId;
  const sql = `SELECT * FROM coach_orders WHERE user_id = ?`;

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching coach_orders items:", err);
      res.status(500).json({ error: "Error fetching coach_orders items" });
    } else {
      res.json(results);
    }
  });
});

// Get cart items for logged-in user
app.get("/cart", (req, res) => {
  const { userId } = req.query; // Assuming userId is passed as a query parameter

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const sql = `
      SELECT ci.quantity, i.name, i.price
      FROM cart_items ci
      JOIN items i ON ci.item_id = i.id
      WHERE ci.user_id = ?
  `;
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error fetching cart items:", err);
      res.status(500).json({ error: "Error fetching cart items" });
    } else {
      res.json(results);
    }
  });
});

// Update cart item quantity
app.put("/cart", (req, res) => {
  const { userId, itemId, quantity } = req.body;

  if (!userId || !itemId || quantity === undefined) {
    return res
      .status(400)
      .json({ error: "User ID, Item ID, and Quantity are required" });
  }

  const sql = `
      UPDATE cart_items
      SET quantity = ?
      WHERE user_id = ? AND item_id = ?
  `;
  db.query(sql, [quantity, userId, itemId], (err, results) => {
    if (err) {
      console.error("Error updating cart item quantity:", err);
      res.status(500).json({ error: "Error updating cart item quantity" });
    } else {
      res.json({ success: true });
    }
  });
});

// Backend API to remove item from cart
app.delete("/cart/:itemId", (req, res) => {
  const { itemId } = req.params;
  const { userId } = req.body;

  const sql = "DELETE FROM cart_items WHERE item_id = ? AND user_id = ?";
  db.query(sql, [itemId, userId], (err, result) => {
    if (err) {
      console.error("Error removing item from cart:", err);
      res.status(500).json({ error: "Failed to remove item from cart" });
    } else {
      res.json({ message: "Item removed from cart" });
    }
  });
});

// Serve static files from the public directory
app.use(express.static("public"));

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Login")
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send("Invalid Password");
    }

    if (err) {
      res.status(500).send("Server error");
    } else if (results.length > 0) {
      req.session.user = results[0];
      res.send({ loggedIn: true, user: results[0] });
    } else {
      res.send({ loggedIn: false, message: "Invalid credentials" });
    }
  });
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  const { username, fname, lname, email, country, phone, category, password } =
    req.body;
  console.log("Signup")

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
      "INSERT INTO users (username, fname, lname, email, country, phone, category, password, confrim_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(
      query,
      [username, fname, lname, email, country, phone, category, hashedPassword, ""],
      (err, result) => {
        if (err) throw err;
        res.redirect("/login");
      }
    );
  });
});

// Shopping Routes
app.get("/welcome", (req, res) => {
  res.render("welcome", { products, cart });
  // const data = { message: 'Button clicked! This is the new page (backend).' };
  // res.json(data);
});

// Route to handle logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send("Server error");
    } else {
      res.send({ loggedIn: false });
    }
  });
});

//Route to check session
app.get("/checkSession", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.get("/cart", (req, res) => {
  const totalCost = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  res.render("cart", { cart, totalCost });
});

app.post("/remove-from-cart", (req, res) => {
  const productId = parseInt(req.body.productId);
  const productIndex = cart.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }

  res.redirect("/cart");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

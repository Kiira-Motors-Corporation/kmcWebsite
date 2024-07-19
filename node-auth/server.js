require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./db/dbConfig");

const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const randomstring = require("randomstring");
const secretKey = randomstring.generate(32);

const db = require("./models");
const {Books,Items} = require("./models")

app.get("/test",(req,res)=>{
Books.create({
  firstName:"Mike",
  age:9
}).catch((err)=>{
  if(err){
    console.log(err);
  }
})
res.send("Inserted")
})

app.get("/getting",(req,res)=>{
  Items.findAll().then((book)=>{res.send(book)}).catch((err)=>{if(err){console.log(err);}})

  })


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const sessionStore = new MySQLStore({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
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

// Routes
const userRoute = require("./routes/User");
const evsRoute = require("./routes/EVS");
const coachRoute = require("./routes/Coach");
const itemsRoute = require("./routes/Items");
const evsOrdersRoute = require("./routes/evsOrders");
const coachOrdersRoute = require("./routes/coachOrders");

app.use("/user", userRoute);
app.use("/evs", evsRoute);
app.use("/coach", coachRoute);
app.use("/items", itemsRoute);
app.use("/evs_orders", evsOrdersRoute);
app.use("/coach_orders", coachOrdersRoute);



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

// Route to handle logout

//Route to check session
app.get("/user/checkSession", (req, res) => {
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

db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
  });
});

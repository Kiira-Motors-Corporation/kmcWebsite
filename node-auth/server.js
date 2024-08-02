require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const session = require("express-session");
const db = require("./models/index");
const randomstring = require("randomstring");
const secretKey = randomstring.generate(32);
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Initialize SequelizeStore with Sequelize instance
const sessionStore = new SequelizeStore({
  db: db.sequelize, // Pass the Sequelize instance
});

// Synchronize the session store with the database
sessionStore.sync();

// Configure session middleware
app.use(session({
  secret: secretKey, // Replace with a strong secret
  store: sessionStore, // Use Sequelize store
  resave: false, // Set to false to prevent unnecessary session saves
  saveUninitialized: false, // Set to false to prevent saving uninitialized sessions
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // Cookie expires in 1 day
  },
}));

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Routes
const userRoute = require("./routes/User");
const vehicleRoute = require("./routes/Vehicle");
const itemsRoute = require("./routes/Items");
const cartRoute = require("./routes/Cart");
const cartItemsRoute = require("./routes/CartItems");

app.use("/user", userRoute);
app.use("/vehicle", vehicleRoute);
app.use("/items", itemsRoute);
app.use("/cart", cartRoute);
app.use('/cart', cartItemsRoute);

app.get("/", (req, res) => {
  res.send(`connected on port ${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, async () => {
  try {
    await db.sequelize.authenticate();
    console.log(`Server started on http://localhost:${port}`);
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

db.sequelize.sync().then(() => {
  console.log('Database synced');
});

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

const db = require("./models/index");
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
const cartItemsRoute = require("./routes/Cart");

app.use("/user", userRoute);
app.use("/evs", evsRoute);
app.use("/coach", coachRoute);
app.use("/items", itemsRoute);
app.use("/evs_orders", evsOrdersRoute);
app.use("/coach_orders", coachOrdersRoute);
app.use("/cart", cartItemsRoute);



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

app.get("/", (req,res)=>{
  res.send(`connected on port ${port}`)
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);

});

db.sequelize.sync().then(() => {
  console.log('Database synced');
});

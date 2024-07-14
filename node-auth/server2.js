const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let products = [
  { id: 1, name: 'Kayoola EVS model2023', price: 10, imageUrl: 'images/a.png' },
  { id: 2, name: 'Spare parts', price: 20, imageUrl: 'images/autoparts.png' },
  { id: 3, name: 'Kayoola EVS model2022', price: 30, imageUrl: 'images/b.png' },
  { id: 4, name: 'Kayoola couch', price: 40, imageUrl: 'images/d.png' },
  { id: 5, name: 'EV chargers', price: 40, imageUrl: 'images/picture8.png' }
];

let cart = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { products, cart });
});

app.post('/add-to-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity) || 1;
  const product = products.find(p => p.id === productId);

  if (product) {
    const cartItem = cart.find(p => p.id === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  }

  res.redirect('/');
});

app.get('/cart', (req, res) => {
  const totalCost = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('cart', { cart, totalCost });
});

// Remove from cart
app.post('/remove-from-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const productIndex = cart.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }

  res.redirect('/cart');
});

app.get('/checkout', (req, res) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('checkout', { cart, total });
});

app.post('/checkout', (req, res) => {
  // Process payment (this is just a simulation)
  cart = [];
  res.send('Payment successful. Kira Motors to configure payment');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});



















/////////////////////////////////




const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kmc'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// Dummy products
let products = [
  { id: 1, name: 'Kayoola EVS model2023', price: 10, imageUrl: 'images/a.png' },
  { id: 2, name: 'Spare parts', price: 20, imageUrl: 'images/autoparts.png' },
  { id: 3, name: 'Kayoola EVS model2022', price: 30, imageUrl: 'images/b.png' },
  { id: 4, name: 'Kayoola couch', price: 40, imageUrl: 'images/d.png' },
  { id: 5, name: 'EV chargers', price: 40, imageUrl: 'images/picture8.png' }
];

let cart = [];

// Register Route
app.post('/register', (req, res) => {
  console.log('Request body:', req.body);
  const { username, fname, lname, email, country, phone, category, password, confirm_password } = req.body;

  // Check if all fields are present
  if (!username || !fname || !lname || !email || !country || !phone || !category || !password || !confirm_password) {
    return res.status(400).send('All fields are required');
  }

  // Check if password and confirm_password match
  if (password !== confirm_password) {
    return res.status(400).send('Passwords do not match');
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  const query = 'INSERT INTO users (username, fname, lname, email, country, phone, category, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [username, fname, lname, email, country, phone, category, hashedPassword], (err, result) => {
    if (err) throw err;
    
    res.redirect('/login');
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send('Invalid Password');
    }

    //res.send('Login successful');
   // Assuming successful login, redirect to the cart page
     res.redirect('/cart');
  });
});

// Shopping Routes
app.get('/', (req, res) => {
  res.render('index', { products, cart });
});

app.post('/add-to-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const quantity = parseInt(req.body.quantity) || 1;
  const product = products.find(p => p.id === productId);

  if (product) {
    const cartItem = cart.find(p => p.id === productId);
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  }

  res.redirect('/');
});

app.get('/cart', (req, res) => {
  const totalCost = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('cart', { cart, totalCost });
});

app.post('/remove-from-cart', (req, res) => {
  const productId = parseInt(req.body.productId);
  const productIndex = cart.findIndex(p => p.id === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }

  res.redirect('/cart');
});

app.get('/checkout', (req, res) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  res.render('checkout', { cart, total });
});

app.post('/checkout', (req, res) => {
  // Process payment (this is just a simulation)
  cart = [];
  res.send('Payment successful. Kira Motors to configure payment');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


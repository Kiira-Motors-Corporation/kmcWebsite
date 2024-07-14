// Dummy products
let products = [
    { id: 1, name: "Kayoola EVS model2023", price: 10, imageUrl: "images/a.png" },
    { id: 2, name: "Spare parts", price: 20, imageUrl: "images/autoparts.png" },
    { id: 3, name: "Kayoola EVS model2022", price: 30, imageUrl: "images/b.png" },
    { id: 4, name: "Kayoola couch", price: 40, imageUrl: "images/d.png" },
    { id: 5, name: "EV chargers", price: 40, imageUrl: "images/picture8.png" },
  ];

  let cart = [];


  // Serve register.html for /register URL
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public/register.html"));
  });

  // Serve login.html for /login URL
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html"));
  });


  //redirect to login
app.get("/redirect-to-login", (req, res) => {
    res.redirect("http://localhost:3000/login");
  });

  app.get("/go-to-frontend", (req, res) => {
    // Redirect to a route in your React frontend
    res.redirect("http://localhost:5173"); // Adjust the URL and route as needed
  });


  // Register Route
app.post("/register", (req, res) => {
    const {
      username,
      fname,
      lname,
      email,
      country,
      phone,
      category,
      password,
      confirm_password,
    } = req.body;

    // Check if all fields are present
    if (
      !username ||
      !fname ||
      !lname ||
      !email ||
      !country ||
      !phone ||
      !category ||
      !password ||
      !confirm_password
    ) {
      return res.status(400).send("All fields are required");
    }

    // Check if password and confirm_password match
    if (password !== confirm_password) {
      return res.status(400).send("Passwords do not match");
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


  // Shopping Routes
app.get("/", (req, res) => {
    // Retrieve user information from the session
    const user = req.session.user;

    // Check if the user is logged in (session exists)
    if (!user) {
      return res.redirect("/login"); // Redirect to login if the user is not logged in
    }

    // Render the dashboard page template and pass the user information to it
    //res.render('dashboard', { user });
    res.render("index", { user, products, cart });
    // const data = { message: 'Button clicked! This is the new page (backend).' };
    // res.json(data);
  });


  app.post("/add-to-cart", (req, res) => {
    const productId = parseInt(req.body.productId);
    const quantity = parseInt(req.body.quantity) || 1;
    const product = products.find((p) => p.id === productId);

    if (product) {
      const cartItem = cart.find((p) => p.id === productId);
      if (cartItem) {
        cartItem.quantity += quantity;
      } else {
        cart.push({ ...product, quantity });
      }
    }

    res.redirect("/");
  });


  app.get("/checkout", (req, res) => {
    const total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    res.render("checkout", { cart, total });
  });

  app.post("/checkout", (req, res) => {
    // Process payment
    cart = [];
    res.send("Payment successful. Kira Motors to configure payment");
  });
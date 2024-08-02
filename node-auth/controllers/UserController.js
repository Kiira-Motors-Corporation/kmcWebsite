const bcrypt = require("bcryptjs");
const {Users} = require("../models")

const getUsers = (req, res) => {
  Users.findAll().then((user)=>{res.send(user)}).catch((err)=>{if(err){
    console.log(err);
  }})


};



const checkEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking email:', error);
    res.status(500).json({ error: 'Error checking email' });
  }
};

const createUser = async (req, res) => {
  const { name, email, contact, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);


  try {
    const newUser = await Users.create({
      name,
      email,
      contact,
      password: hashedPassword
    });
    res.status(201).json({ message: 'User created successfully', user: newUser });

    const existingUser = await Users.findOne({where:{email}});
    if (existingUser) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(400).json({ exists: false });
    }
1
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    }
    // Create the user in the database




};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await Users.findOne({ where: { email } });

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

const checkSession = (req, res) => {
  if (req.session.user) {
    res.status(200).json({ user: req.session.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
  checkSession,
  checkEmail
};

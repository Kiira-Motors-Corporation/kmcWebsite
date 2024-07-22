// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Define routes and map them to controller functions
router.get('/', userController.getUsers);
router.post('/signup', userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.get('/session', userController.checkSession);

module.exports = router;

// routes/protected.js (or any route you want to protect)
const express = require('express');
const router = express.Router();

router.get('/protected', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Unauthorized');
  }

  res.send('This is a protected route');
});

module.exports = router;

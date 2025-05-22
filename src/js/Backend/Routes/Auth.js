const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {
  const { matricNo, password } = req.body;

  if (!matricNo || !password) {
    return res.status(400).json({ message: 'Matric No and Password are required' });
  }

  db.query('SELECT * FROM users WHERE matricNo = ?', [matricNo], async (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid matric number' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, matricNo: user.matricNo } });
  });
});

module.exports = router;

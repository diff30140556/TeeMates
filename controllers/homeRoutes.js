const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    res.redirect('/user');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

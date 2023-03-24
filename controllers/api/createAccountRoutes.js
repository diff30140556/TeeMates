const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      res.status(200).json(userData); // add res.render after 200?
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
      // Remove console.log -- used for debugging      
      console.log(req.body)
      const userData = await User.create(req.body);
      res.status(200).json(userData); 
      // res.redirect('/');
      // res.redirect('/homepage', {
      //   logged_in: !req.session.logged_in,
      // });// add res.render after 200?
    } catch (err) {
      // Remove console.log -- used for debugging
      console.log(err) 
      res.status(400).json(err);
    }
  });

 


router.post('/login', async (req, res) => {
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
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

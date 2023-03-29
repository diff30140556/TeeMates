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
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      console.log('passsssssssssssssssssss')
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // res.redirect('/userdash', {
    //   logged_in: req.session.logged_in,
    // });
    req.session.logged_in = true;
    res.status(200).json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

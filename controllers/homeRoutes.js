const router = require('express').Router();
const { User, TeeTime, UserTeeTime } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('createAccount');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/submit', withAuth, async (req, res) => {
  try {
    res.render('submit', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userdash', withAuth, async (req, res) => {
  try {    
    res.render('userdash', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/teetimes', withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;
    const confirmedTeetimes = await TeeTime.findAll({
      include: [
        {
          model: User,
          through: UserTeeTime,
          as: 'teetime_user',
          where: { id: user_id },
        }],
    });
    const myteetimes = confirmedTeetimes.map((myteetimes) =>
      myteetimes.get({ plain: true })
    );
    console.log(myteetimes)

    res.render('myteetimes', {
      myteetimes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
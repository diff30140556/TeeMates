const router = require('express').Router();
const { User, TeeTime, UserTeeTime } = require('../models');
const withAuth = require('../utils/auth');
const bcrypt = require('bcrypt');

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

router.get('/submit', async (req, res) => {
  try {
    res.render('submit');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userdash', async (req, res) => {
  try {
    res.render('userdash');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/teetimes', withAuth, async (req, res) => {
  try {
    const confirmedTeetimes = await TeeTime.findAll({
      include: [{ model: User, through: UserTeeTime, as: 'teetime_user' }],
    });
    const myteetimes = confirmedTeetimes.map((myteetimes) =>
      myteetimes.get({ plain: true })
    );

    res.render('myteetimes', {
      myteetimes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/userdash', async (req, res) => {
  try {
    const teetimeData = await TeeTime.findAll({
      where: {
        [Op.and]: [
          { course_name: req.body.course_name },
          { date: req.body.date },
        ],
      },
    });

    const teetimes = teetimeData.map((teetime) => teetime.get({ plain: true }));

    res.render('userdash', {
      // need to update to handlebar filename for partial/cards with search results
      teetimes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

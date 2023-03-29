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

router.get('/submit',withAuth, async (req, res) => {
  try {
    res.render('submit',{
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userdash',withAuth, async (req, res) => {
  try {
    res.render('userdash',{
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/teetimes',withAuth, async (req, res) => {
  try {
    const id = req.params.id
    const confirmedTeetimes = await TeeTime.findAll({
      include: [{ model: User, through: UserTeeTime, as: 'teetime_user' }],
    });
    const myteetimes = confirmedTeetimes.map((myteetimes) =>
      myteetimes.get({ plain: true })
    );

    // res.render('myteetimes', {
    //   myteetimes,
    //   logged_in: req.session.logged_in,
    // });
    res.status(200).json(myteetimes)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/userdash', async (req, res) => {
  try {
    // const teetimeData = await TeeTime.findAll({
    //   where: {
    //     [Op.and]: [
    //       { course_name: req.body.course_name },
    //       { date: req.body.date },
    //     ],
    //   },
    // });
    const teetimeData = await TeeTime.findAll();

    const teetimes = teetimeData.map((teetime) => teetime.get({ plain: true }));
    console.log(teetimes);
    res.render('userdash', {
      // need to update to handlebar filename for partial/cards with search results
      teetimes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

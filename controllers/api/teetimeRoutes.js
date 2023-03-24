const router = require('express').Router();
const { User, TeeTime, UserTeeTime } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const confirmedTeetimes = await TeeTime.findAll({
      include: [{ model: User, through: UserTeeTime, as: 'teetime_user' }]
    });
    const myteetimes = confirmedTeetimes.map((myteetimes) => myteetimes.get({ plain: true }));

    res.render('myteetimes', { 
      myteetimes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

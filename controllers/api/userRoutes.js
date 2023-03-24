const router = require('express').Router();
const { Op } = require("sequelize");
const { TeeTime } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const teetimeData = await TeeTime.findAll({
      where: {
        [Op.and]: [
          { course_name: req.body.course_name },
          { date: req.body.date }
        ]
      }
    });

    const teetimes = teetimeData.map((teetime) => teetime.get({ plain: true }));

    res.render('userdash', { 
      teetimes, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
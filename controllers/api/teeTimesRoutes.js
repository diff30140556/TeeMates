const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { TeeTime, UserTeeTime } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const date = new Date(req.body.date);
    const sequelizeDate = date.toISOString();
    const teetimeData = await TeeTime.findAll({
      where: {
        course_name: req.body.course_name,
        date: sequelizeDate
      },
    });
    const teetimes = teetimeData.map((teetime) => teetime.get({ plain: true }));
    res.status(200).json(teetimes)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/attend', withAuth, async (req, res) => {
  try {
    const teetimeid = req.body.teetimeId;
    const user_id = req.session.user_id;
    const userteetimeData = await UserTeeTime.create({
      user_id,
      teetime_id: teetimeid
    });
    res.status(200).json('attend success!')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
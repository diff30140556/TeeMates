const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { TeeTime, UserTeeTime } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const user_id = req.session.user_id;
    const teeTime = await TeeTime.create({
      course_name: req.body.course_name,
      date: req.body.date,
      time: req.body.time,
      handicap: req.body.handicap,
      user_id
    });
    const teetime_id = teeTime.id;
    console.log(teetime_id);
    await UserTeeTime.create({
      user_id,
      teetime_id
    })
    res.status(200).json();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

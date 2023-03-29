const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { TeeTime } = require('../../models');

router.post('/', withAuth, async (req, res) => {
  try {
    const teeTime = await TeeTime.create(req.body);
    console.log(teeTime)
    res.status(200).json(teeTime);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

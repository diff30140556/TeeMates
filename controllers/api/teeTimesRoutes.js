const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { TeeTime } = require('../../models');

router.post('/', async (req, res) => {
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

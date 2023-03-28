const router = require('express').Router();
const { Op } = require("sequelize");
const { TeeTime, User } = require('../../models');

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

router.get('/', async (req, res) => {
  const data = await TeeTime.findAll()
    // const results = data.map( (tee) => tee.get({plain: true}));
    // console.log(results)
  // const data = await TeeTime.findAll()
  // const results = data.map( (tee) => tee.get({plain: true}));
  // console.log(results)
  res.render('userdash')
})

router.post('/result', async (req, res) => {
  try{
    const data = await TeeTime.findAll()
    const results = data.map( (tee) => tee.get({plain: true}));
    console.log(results)
    // res.status(200).json(results)

    res.render('userdash', {
      results,
      test: 'Hi'
    })

  }catch (err) {
    console.log(err)
  }
})


module.exports = router;
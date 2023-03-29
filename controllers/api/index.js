const router = require('express').Router();
const submitTimesRoutes = require('./submitTimesRoutes');
const teeTimesRoutes = require('./teeTimesRoutes');
const userRoutes = require('./userRoutes');

router.use('/teetimes', teeTimesRoutes);
router.use('/submit', submitTimesRoutes);
router.use('/user', userRoutes);

module.exports = router;

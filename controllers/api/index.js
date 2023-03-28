const router = require('express').Router();
const submitTimesRoutes = require('./submitTimesRoutes');
const userRoutes = require('./userRoutes');

router.use('/submit', submitTimesRoutes);
router.use('/user', userRoutes);

module.exports = router;

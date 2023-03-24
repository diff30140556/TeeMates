const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teetimeRoutes = require('./teetimeRoutes');
const createAccountRoutes = require('./createAccountRoutes');
const submitTimesRoutes = require('./submitTimesRoutes');

router.use('/userdash', userRoutes);
router.use('/teetimes', teetimeRoutes);
router.use('/createaccount', createAccountRoutes);
router.use('/submit', submitTimesRoutes);


module.exports = router;

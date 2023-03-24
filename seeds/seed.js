const sequelize = require('../config/connection');
const { User, TeeTime, UserTeeTime } = require('../models');

const userData = require('./userData.json');
const teetimeData = require('./teetimeData.json');
const userteetimeData = require('./userteetimeData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await TeeTime.bulkCreate( teetimeData );

  await UserTeeTime.bulkCreate( userteetimeData );

  
  process.exit(0);
  }


seedDatabase();

const User = require('./User');
const TeeTime = require('./TeeTime');
const UserTeeTime = require('./UserTeeTime');


User.belongsToMany(TeeTime, {
  through: {
    model: UserTeeTime,
    unique: false
  },
  // as: 'planned_teatime'
})

TeeTime.belongsToMany(User, {
  through: {
    model: UserTeeTime,
    unique: false
  },
  // as: 'teetime_user'
})

module.exports = { User, TeeTime, UserTeeTime };

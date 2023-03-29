const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserTeeTime extends Model {}

UserTeeTime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        // unique: false,
      },
    },
    teetime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teetime',
        key: 'id',
        // unique: false,
      },
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    handicap: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: null,
      // defaultValue: DataTypes.NOW,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userteetime',
  }
);

module.exports = UserTeeTime;

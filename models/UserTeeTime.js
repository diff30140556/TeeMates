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
        unique: false,
      },
    },
    teetime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teetime',
        key: 'id',
        unique: false,
      },
    }
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

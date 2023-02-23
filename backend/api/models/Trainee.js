const Sequelize = require('sequelize');
const User = require('./User')

const sequelize = require('../../config/database');

const tableName = 'trainee';
const Trainee = sequelize.define('Trainee', {
  profileImg: {
    type: Sequelize.STRING,
  },
  focus: {
    type: Sequelize.STRING,
  },
  names: {
    type: Sequelize.STRING,
  },
  bmi: {
    type: Sequelize.DOUBLE
  },
  weight: {
    type: Sequelize.DOUBLE
  },
  height: {
    type: Sequelize.DOUBLE
  },
  points: {
    type: Sequelize.INTEGER
  },
  streak: {
    type: Sequelize.INTEGER
  },
  duration: {
    type: Sequelize.INTEGER
  },
  goalStart: {
    type: Sequelize.DATE
  },
  trainer: {
    type: Sequelize.INTEGER
  },
  level: {
    type: Sequelize.ENUM("JNR", "MID", "SNR")
  },
  goal: {
    type: Sequelize.ENUM("LOSE_FAT", "BUILD_MUSCLE", "GET_STRONG", "GENERAL")
  }
}, { tableName });

Trainee.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

Trainee.belongsTo(User);

module.exports = Trainee;

const Sequelize = require('sequelize');
const sequelize = require('../../config/database');
const Trainee = require('./Trainee')

const tableName = 'user_progress';
const UserProgress = sequelize.define('UserProgress', {
  exercise: {
    type: Sequelize.STRING,
  },
  day: {
    type: Sequelize.INTEGER,
  },
  totalWeight: {
    type: Sequelize.STRING,
  },
  points: {
    type: Sequelize.INTEGER,
  },
  TraineeId: {
    type: Sequelize.INTEGER,
  },
}, { tableName });

UserProgress.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};


module.exports = UserProgress;
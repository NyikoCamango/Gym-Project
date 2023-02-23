const Sequelize = require('sequelize');
const User = require('./User')

const sequelize = require('../../config/database');

const tableName = 'workout_progress';

const WorkoutProgress = sequelize.define('WorkoutProgress', {
  type: {
    type: Sequelize.STRING,
  },
  points: {
    type: Sequelize.INTEGER,
  },
  UserId: {
    type: Sequelize.INTEGER,
  },
  
}, { tableName });


WorkoutProgress.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = WorkoutProgress;

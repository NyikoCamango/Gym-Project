const Sequelize = require('sequelize');
//user's workout schedule
const sequelize = require('../../config/database');
const Trainee = require('./Trainee')

const tableName = 'user_schedule';
const UserGymSchedule = sequelize.define('UserGymSchedule', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  tools: {
    type: Sequelize.STRING,
  },
  done: {
    type: Sequelize.BOOLEAN,
  },
  day: {
    type: Sequelize.INTEGER,
  },
  schedule: { //exersizes IDs
    type: Sequelize.STRING,
  },
  duration: {
    type: Sequelize.INTEGER,
  },
  TraineeId: {
    type: Sequelize.INTEGER,
  },
  type: {
    type: Sequelize.STRING,
  }
}, { tableName });


UserGymSchedule.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = UserGymSchedule;

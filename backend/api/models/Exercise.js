
const Sequelize = require('sequelize');

const sequelize = require('../../config/database');
  
const tableName = 'exercise'

const Exercise = sequelize.define('Exercise', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  video: {
    type: Sequelize.STRING,
  },
  thumbnail: {
    type: Sequelize.STRING,
  },
  tips: {
    type: Sequelize.STRING,
  },
  points: {
    type: Sequelize.INTEGER
  },
  category: {
    type: Sequelize.INTEGER
  },
}, {tableName });

Exercise.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};


module.exports = Exercise;

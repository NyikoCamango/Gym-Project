const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'trainer';
const Trainer = sequelize.define('Trainer', {
  names: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.ENUM("YOGA", "WEIGHT")
  },
  profileImg: {
    type: Sequelize.STRING,
  }
}, { tableName });

Trainer.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Trainer;

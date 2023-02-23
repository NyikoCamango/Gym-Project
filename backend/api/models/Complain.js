const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'complain';

const Complain = sequelize.define('Complain', {
  title: {
    type: Sequelize.STRING,
  },
}, { tableName });


Complain.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Complain;
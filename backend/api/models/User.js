const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user)
  },
};

const tableName = 'users';
const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.ENUM("TRAINER", "USER", "ADMIN")
  },
}, { hooks, tableName });

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = User;

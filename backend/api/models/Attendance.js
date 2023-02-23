const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'attendance';
const Attendance = sequelize.define('Attendance', {
  name: {
    type: Sequelize.STRING,
  },
  surname: {
    type: Sequelize.STRING,
  },
  timein: {
    type: Sequelize.DATE,

  },
  timeout: {
    type: Sequelize.DATE
  },
  status: {
    type: Sequelize.ENUM("GYMING", "OUT")
  },
  profileImg: {
    type: Sequelize.STRING,
  }
}, { tableName });

Attendance.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Attendance;

const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const tableName = "attend-gym";
const AttendenceGym = sequelize.define(
  "AttendenceGym",
  {
    traineeId: {
      type: Sequelize.INTEGER,
    }
  },

  { tableName }
);

AttendenceGym.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = AttendenceGym;

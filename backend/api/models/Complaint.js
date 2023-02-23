const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const tableName = "complaints";
const Complaint = sequelize.define(
  "complaints",
  {
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
  },

  { tableName }
);

Complaint.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Complaint;

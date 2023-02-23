const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const tableName = "events";

const Event = sequelize.define(
  "Event",
  {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    maxAttendees: {
      type: Sequelize.INTEGER,
    },
    eventHost: {
      type: Sequelize.INTEGER,
    },
    isPrivate: {
      type: Sequelize.BOOLEAN,
    },
    eventDate: {
      type: Sequelize.DATE,
    },
    category: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM("COMING", "DONE", "PENDING", "REJECTED"),
    },
  },
  { tableName }
);

Event.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  return values;
};

module.exports = Event;

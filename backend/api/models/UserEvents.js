const {DataTypes} = require('sequelize');
const User = require('./User')
const Event = require('./Event')
const sequelize = require('../../config/database');

const tableName = 'user_events';

const UserEvents = sequelize.define('UserEvent', {
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    EventId: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.STRING,
    }
}, {tableName})

Event.belongsToMany(User, { through: UserEvents });
User.belongsToMany(Event, { through: UserEvents });

UserEvents.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    return values;
};

module.exports = UserEvents
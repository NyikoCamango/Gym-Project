const Sequelize = require('sequelize');

const connection = require('./connection');

let database;

switch (process.env.NODE_ENV) {
  case 'production':
    database = new Sequelize('postgres://lkcyvjqz:ktTv-ljQKyKyQtEc70ITSNWqtAkh6jRx@isilo.db.elephantsql.com/lkcyvjqz')
    // database = new Sequelize(
    //   connection.production.database,
    //   connection.production.username,
    //   connection.production.password, {
    //     host: connection.production.host,
    //     dialect: connection.production.dialect,
    //     pool: {
    //       max: 5,
    //       min: 0,
    //       idle: 10000,
    //     },
    //   },
    // );
    break;
  case 'testing':
    database = new Sequelize(
      connection.testing.database,
      connection.testing.username,
      connection.testing.password, {
        host: connection.testing.host,
        dialect: connection.testing.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      },
    );
    break;
  default:
    console.log('here')
    database = new Sequelize(
      connection.development.database,
      connection.development.username,
      connection.development.password, {
        host: connection.development.host,
        dialect: connection.development.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
        storage: 'database.sqlite'
      },
    );
}

module.exports = database;
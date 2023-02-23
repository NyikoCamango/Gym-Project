const production = {
  database: 'lkcyvjqz',
  username: 'lkcyvjqz',
  password: 'ktTv-ljQKyKyQtEc70ITSNWqtAkh6jRx',
  host: 'isilo.db.elephantsql.com',
  dialect: 'postgres',
  port: 5432
};


const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const development = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};

const publicRoutes = require('./routes/publicRoutes');

const config = {
  migrate: true,
  publicRoutes,
  port: process.env.PORT || '3001',
};

module.exports = config;

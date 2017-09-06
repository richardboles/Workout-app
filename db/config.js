// Our database is either at some URL,
// or configured at some host:port
// TODO: [1] Export your database config
module.exports = process.env.DATABASE_URL || {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'workouts_db',
  /* user:     process.env.DB_USER, */
};

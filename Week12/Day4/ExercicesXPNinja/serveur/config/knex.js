const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'elodie14',
    database: 'exninja',
    port: 5432,
  },
});

module.exports = db;
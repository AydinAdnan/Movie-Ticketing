const Pool = require("pg").Pool;

const pool = new Pool({
  user: "movie",
  host: "localhost",
  database: "login",
  password: "password",
  port: 5432,
});

module.exports = pool;

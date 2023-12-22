const Pool = require("pg").Pool;

const DATABASE_URL =
  "postgres://lvkcfoiysfnfxy:59cd20a12ca5560a7a01ea47f71b2a8035302cb675eb9e3738f2f187273149fc@ec2-44-213-151-75.compute-1.amazonaws.com:5432/deosv03enhd9fu";

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

console.log("url: " + DATABASE_URL);

module.exports = pool;

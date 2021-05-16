const mysql = require("mysql");

const database = mysql.createPool({
    host: process.env.DATABASE_MYSQL_HOST,
    database: process.env.DATABASE_MYSQL_DATABASE,
    user: process.env.DATABASE_MYSQL_USER,
    password: process.env.DATABASE_MYSQL_PASSWORD
});

module.exports.pool = database;
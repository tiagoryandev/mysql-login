const mysqldump = require("mysqldump");

async function generateDump() {
    await mysqldump({
        connection: {
            host: process.env.DATABASE_MYSQL_HOST,
            database: process.env.DATABASE_MYSQL_DATABASE,
            user: process.env.DATABASE_MYSQL_USER,
            password: process.env.DATABASE_MYSQL_PASSWORD
        },
        dumpToFile: "./database/backup/dump.sql"
    });
};

module.exports = generateDump;

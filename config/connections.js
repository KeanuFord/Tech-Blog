const Sequalize = require('sequelize');
require('dotenv').config();

let sequalize;

const sequelize = process.env.DB_URL
if(process.env.DB_URL) {
    sequalize = new Sequalize(process.env.DB_URL);
} else {
    sequalize = new Sequalize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432
        }
    );
}

module.exports = sequelize;

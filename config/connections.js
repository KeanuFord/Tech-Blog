// First line imports sequalize
// Second line imports the .env file
const Sequalize = require('sequalize');
require('dotenv').config();

let sequalize;

if(process.env.DB_URL) {
    sequalize = new Sequalize(process.env.DB_URL);
} else {
    sequalize = new Sequalize(
        process.env.DB_NAME,
        process.env.DB_USER,
        proess.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432
        }
    );
}

module.exports = sequalize;

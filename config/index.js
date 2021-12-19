const dotenv = require("dotenv");

dotenv.config();

const config = {
    http: {
        host: process.env.Host || "0.0.0.0",
        port: process.env.Port || process.env.HTTP_PORT
    },
    dbString: process.env.DB_CONNECTION_STRING
}

module.exports = config;
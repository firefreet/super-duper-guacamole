const mysql = require('mysql')
const password = require('./password.js')

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: password,
        database: "burgers_db"
    });
}
module.exports = connection
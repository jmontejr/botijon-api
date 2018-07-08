var mysql = require('mysql');

var connection = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'
    host: 'databases.000webhost.com',
    user: 'id2500549_botijonadmin',
    password: 'BotijOnAppKey123',
    database: 'id2500549_botijondb'
});

module.exports = connection;
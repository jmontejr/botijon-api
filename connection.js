var mysql = require('mysql');

var connection = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'
    host: 'sql31.main-hosting.eu',
    user: 'u834126065_botij',
    password: 'BotijOnAppKey123',
    database: 'u834126065_botij'
});

module.exports = connection;
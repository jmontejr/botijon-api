var mysql = require('mysql');

var connection = mysql.createPool({
    // Local
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'

    // Hostinger
    // host: 'sql31.hostinger.com.br',
    // user: 'u834126065_botij',
    // password: 'BotijOnAppKey123',
    // database: 'u834126065_botij'

    // 000Webhost
    host: 'https://databases.000webhost.com/index.php?token=64eb54f65ec8cb022b5f5a93df0d9f61',
    user: 'id2500549_botijonadmin',
    password: 'BotijOnAppKey123',
    database: 'id2500549_botijondb'
});

module.exports = connection;
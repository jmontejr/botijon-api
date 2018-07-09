var mysql = require('mysql');

var connection = mysql.createPool({
    // Local
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'

    host: 'jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'iv1f8j4s0ax3g5tc',
    password: 'ldqq85lgwq4d35p7',
    database: 'ixfppftl25uv9bfm'
});

module.exports = connection;
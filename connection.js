var mysql = require('mysql');

var connection = mysql.createPool({
    // Local
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'botijon'

    host: 'g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'b411pshuob97lls2',
    password: 'efudapjg52q6raio',
    database: 'xu1xnwdxpxu6ov5p'
});

module.exports = connection;
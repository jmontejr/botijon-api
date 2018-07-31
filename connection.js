var mysql = require('mysql');

var connection = mysql.createPool({
    // Local
/*     host: 'localhost',
    user: 'root',
    password: '',
    database: 'botijon' */

    host: 'g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hve6hd0bi4hsexfz',
    password: 'cz37d808m84hftw3',
    database: 'kfryq5oifw0i1jqv'
});

module.exports = connection;
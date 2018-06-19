var db = require('../connection'); //reference of connection.js

var Users = {
    getAllUsers: function(callback) {
        return db.query("select * from users", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from users where id=?", [id], callback);
    },
    validationUser: function(email, password, callback) {
        return db.query("select * from users where email=? and password=?", [email, password], callback);
    },
    addUser: function(User, callback) {
        return db.query("insert into users(email, password) values(?,?)", [User.email, User.password], callback );
    },
    deleteUser: function(id, callback) {
        return db.query("delete from users where id=?", [id], callback);
    },
    updateUser: function(id, User, callback) {
        return db.query("update users set password=? where id=?", [User.password, id], callback);
    }
};

module.exports = Users;


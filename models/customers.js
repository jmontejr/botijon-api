var db = require('../connection'); //reference of connection.js

var Customers = {
    getAllCustomers: function (callback) {
        return db.query("select * from customers", callback);
    },
    getCustomerById: function (id, callback) {
        return db.query("select * from customers where id=?", [id], callback);
    },
    verifyCustomer: function (Customer, callback) {
        return db.query("select * from customers where email=?", [Customer.email], callback);
    },
    validationCustomer: function (email, password, callback) {
        return db.query("select * from customers where email=? and password=?", [email, password], callback);
    },
    addCustomer: function (Customer, callback) {
        return db.query("insert into customers(name, email, password) values(?,?,?)", [Customer.name, Customer.email, Customer.password], callback);
    },
    deleteCustomer: function (id, callback) {
        return db.query("delete from customers where id=?", [id], callback);
    },
    changeNameCustomer: function (id, Customer, callback) {
        return db.query("update customers set name=? where id=?", [Customer.name, id], callback);
    },
    changePasswordCustomer: function (id, Customer, callback) {
        return db.query("update customers set password=? where id=?", [Customer.password, id], callback);
    }
};

module.exports = Customers;
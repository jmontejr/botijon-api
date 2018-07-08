var db = require('../connection'); //reference of connection.js

var Payments = {
    getAllPayments: function (callback) {
        return db.query("select * from payments", callback);
    },
    getPaymentById: function (id, callback) {
        return db.query("select * from payments where id=?", [id], callback);
    },
    getPaymenstPerTypeAndStatus: function (type, status, callback) {
        return db.query("select * from payments where payment_type=? and status=?", [type, status], callback);
    },
    addPayment: function (Payment, callback) {
        return db.query("insert into payments(value, payment_type, address_id, date, status) values(?,?,?,now(),?)", 
        [Payment.value, Payment.payment_type, Payment.address_id, Payment.status], callback);
    },
    deletePayment: function (id, callback) {
        return db.query("delete from payments where id=?", [id], callback);
    },
    changePaymentValue: function (id, Payment, callback) {
        return db.query("update payments set value=? where id=?", [Payment.value, id], callback);
    },
    changePaymentStatus: function (id, Payment, callback) {
        return db.query("update payments set status=? where id=?", [Payment.status, id], callback);
    }
};

module.exports = Payments;


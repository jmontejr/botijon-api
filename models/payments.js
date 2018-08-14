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
    getAllPaymentsByCustomer: function (customer_id, callback) {
        return db.query("SELECT * from payments, requests WHERE customer_id=? and (requests.date = payments.date) and (requests.id = payments.request_id)", [customer_id], callback)
    },
    getAllPaymentsToSeller: function (seller_id, address_id, callback) {
        return db.query("SELECT * from payments inner join requests on payments.request_id = requests.id inner join products on products.id = requests.product_id and products.seller_id =? inner join addresses on addresses.id = ?", [seller_id, address_id], callback)
    },
    addPayment: function (Payment, callback) {
        return db.query("insert into payments(value, payment_type, address_id, request_id, date, status) values(?,?,?,?,now(),?)", 
        [Payment.value, Payment.payment_type, Payment.address_id, Payment.request_id, Payment.status], callback);
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


var db = require('../connection'); //reference of connection.js

var Requests = {
    getAllRequests: function (callback) {
        return db.query("select * from requests", callback);
    },
    getRequestId: function (id, callback) {
        return db.query("select * from requests where id=?", [id], callback);
    },
    getIdOfResquest: function (customer_id, product_id, callback) {
        return db.query("select * from requests where customer_id=? and product_id=? and date=CURRENT_DATE",
    [customer_id, product_id], callback);
    },
    addRequest: function (Request, callback) {
        return db.query("insert into requests(customer_id, product_id, date, quantity) values(?,?,now(),?)",
            [Request.customer_id, Request.product_id, Request.quantity], callback);
    },
    updateRequest: function (id, Request, callback) {
        return db.query("update requests set quantity=? where id=?",
            [Request.quantity, id], callback);
    },
    deleteRequest: function (id, callback) {
        return db.query("delete from requests where id=?", [id], callback);
    }
};

module.exports = Requests;
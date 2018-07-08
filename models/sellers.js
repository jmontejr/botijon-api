var db = require('../connection'); //reference of connection.js

var Sellers = {
    getAllSellers: function (callback) {
        return db.query("select * from sellers", callback);
    },
    getSellerById: function (id, callback) {
        return db.query("select * from sellers where id=?", [id], callback);
    },
    verifySeller: function (cpfcnpj, callback) {
        return db.query("select * from sellers where cpfcnpj=?", [cpfcnpj], callback);
    },
    validationSeller: function (email, password, callback) {
        return db.query("select * from sellers where email=? and password=?", [email, password], callback);
    },
    addSeller: function (Seller, callback) {
        return db.query("insert into sellers(name, email, password, cpfcnpj) values(?,?,?,?)", [Seller.name, Seller.email, Seller.password, Seller.cpfcnpj], callback);
    },
    deleteSeller: function (id, callback) {
        return db.query("delete from sellers where id=?", [id], callback);
    },
    changeNameSeller: function (id, Seller, callback){
        return db.query("update sellers set name=? where id=?", [Seller.name], callback);
    },
    changeAddressSeller: function (id, Seller, callback) {
      return db.query("update sellers set address_id=? where id=?", [Seller.address_id], callback);  
    },
    changePasswordSeller: function (id, Seller, callback) {
        return db.query("update sellers set password=? where id=?", [Seller.password, id], callback);
    }
};

module.exports = Sellers;
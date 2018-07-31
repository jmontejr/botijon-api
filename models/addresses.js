var db = require('../connection'); //reference of connection.js

var Addresses = {
    getAllAdresses: function (callback) {
        return db.query("select * from addresses", callback);
    },
    getAdressById: function (id, callback){
        return db.query("select * from addresses where id=?", [id], callback);
    },
    getAddressId: function (address, number, cep, callback) {
        return db.query("select * from addresses where address=? and number=? and cep=?", [address, number, cep], callback);
    },
    addAddress: function (Address, callback){
        return db.query("insert into addresses(address, number, neighborhood, city, state, cep, reference_point, latitude, longitude) values(?,?,?,?,?,?,?,?,?)", 
            [Address.address, Address.number, Address.neighborhood, Address.city, Address.state, Address.cep, Address.reference_point, Address.latitude, Address.longitude], callback);
    },
    updateAddress: function (id, Address, callback){
        return db.query("update addresses set address=?, number=?, neighborhood=?, city=?, state=?, cep=?, reference_point=?, latitude=?, longitude=? where id=?", 
        [Address.address, Address.number, Address.neighborhood, Address.city, Address.state, Address.cep, Address.reference_point, Address.latitude, Address.longitude, id], callback);
    },
    deleteAddress: function(id, callback){
        return db.query("delete from addresses where id=?", [id], callback);
    }
};

module.exports = Addresses;
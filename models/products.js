var db = require('../connection'); //reference of connection.js

var Products = {
    getAllProducts: function (callback) {
        return db.query("select * from products", callback);
    },
    getProductById: function (id, callback) {
        return db.query("select * from products where id=?", [id], callback);
    },
    getProductBySeller: function (seller_id, callback) {
        return db.query("select * from products where seller_id=?", [seller_id], callback);
    },
    getProductByDescription: function (description, callback){
        return db.query("select * from products where description=?", [description], callback);
    },
    getProductPerType: function (productType, callback) {
        return db.query("select * from products where product_type=?", [productType], callback);
    },
    getAllProductsPerBiggerValue: function (value, callback) {
        return db.query("select * from products where value >= ?", [value], callback);
    },
    getAllProductsPerSmallerValue: function (value, callback){
        return db.query("select * from products where value <= ?", [value], callback);
    },
    getAllAvailableTypes: function (status, product_type, callback){
        return db.query("select * from products where status=? and product_type=?", [status, product_type], callback);
    },
    addProduct: function (Product, callback){
        return db.query("insert into products(description, value, seller_id, product_type, status) values(?,?,?,?,?)", 
        [Product.description, Product.value, Product.seller_id, Product.product_type, Product.status], callback);
    },
    deleteProduct: function (id, callback){
        return db.query("delete from table where id=?", [id], callback);
    },
    changeDescription: function (id, Product, callback) {
        return db.query("update products set description=? where id=?", [Product.description, id], callback);
    },
    changeValue: function (id, Product, callback){
        return db.query("update products set value=? where id=?", [Product.value, id], callback);
    },
    changeStatus: function (id, Product, callback){
        return db.query("update products set status=? where id=?", [Product.status, id], callback);
    }
};

module.exports = Products;
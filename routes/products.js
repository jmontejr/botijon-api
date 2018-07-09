var express = require('express');
var router = express.Router();
var products = require('../models/products'); //reference of models/products.js

// GET PRODUCTS ROUTES
router.get('/api/products/', function(req, res, next){
    products.getAllProducts(function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent products found'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all products'
            });
        }
    });
});

router.get('/api/products/:id', function(req, res, next){
    products.getProductById(req.params.id, function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'Product dont found'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned one product'
            });
        }
    });
});

router.get('/api/products/pertype/:productType', function(req, res, next){
    products.getProductPerType(req.params.productType, function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent products this type registered'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all Products this type'
            });
        }
    });
});

router.get('/api/products/description/:description', function(req, res, next){
    products.getProductByDescription(req.params.description, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Product dont found'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all products'
            });
        }
    });
});

router.get('/api/products/biggervalue/:value', function(req, res, next){
    products.getAllProductsPerBiggerValue(req.params.value, function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent products this value registered'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all Products this value'
            });
        }
    });
});

router.get('/api/products/smallervalue/:value', function(req, res, next){
    products.getAllProductsPerSmallerValue(req.params.value, function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent products this value registered'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all Products this value'
            });
        }
    });
});

router.get('/api/products/availabletypes/:availabletypes', function(req, res, next){
    let availables = JSON.parse(req.params.availabletypes);
    let status = availables.status;
    let product_type = availables.product_type;
    products.getAllAvailableTypes(status, product_type, function(err, rows){
        if (err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent products this status of this type'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all products with this status of this type'
            });
        }
    });
});

// POST PRODUCTS ROUTES
router.post('/api/products/create/', function(req, res, next){
    products.addProduct(req.body, function(err, count){
        if(err){
            res.json({
                status: 'error',
                data: err,
                message: 'Could not create product'
            });
        }
        else{
            res.json({
                status: 'success',
                data: req.body,
                message: 'Product created successfully'
            });
        }
    });
});

// DELETE PRODUCTS ROUTES
router.delete('/api/products/delete/:id', function (req, res, next) {
    products.deleteProduct(req.params.id, function (err, count) {
        if (err || count.affectedRows == 0) {
            res.json({
                status: 'error',
                data: err,
                message: 'Could not possible delete the product'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Product removed successfully'
            });
        }
    });
});

// UPDATE PRODUCT ROUTES
router.put('/api/products/changedescription/:id', function (req, res, next) {
    let condition = !!req.body.description;
    if(!condition){
        res.status(500)
        .json({
            status: 'error',
            data: {},
            message: 'Could not possible update the product description'
       });
    }
    else{
        products.changeDescription(req.params.id, req.body, function(err, count){
            if(err || (count.affectedRows == 0)){
                res.json({
                   status: 'error',
                   data: {},
                   message: 'Could not possible update the product description'
                });
            }
            else{
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Product description update successfully'
                });
            }
        });
    }
});

router.put('/api/products/changevalue/:id', function (req, res, next) {
    let condition = !!req.body.value;
    if (!condition) {
        res.status(500)
            .json({
                status: 'error',
                data: {},
                message: 'Could not possible update the product value'
            });
    }
    else {
        products.changeValue(req.params.id, req.body, function (err, count) {
            if (err || (count.affectedRows == 0)) {
                res.json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the product value'
                });
            }
            else {
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Product value update successfully'
                });
            }
        });
    }
});

router.put('/api/products/changestatus/:id', function (req, res, next) {
    let condition = !!req.body.status;
    if (!condition) {
        res.status(500)
            .json({
                status: 'error',
                data: {},
                message: 'Could not possible update the product status'
            });
    }
    else {
        products.changeStatus(req.params.id, req.body, function (err, count) {
            if (err || (count.affectedRows == 0)) {
                res.json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the product status'
                });
            }
            else {
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Product status update successfully'
                });
            }
        });
    }
});

module.exports = router;
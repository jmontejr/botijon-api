var express = require('express');
var router = express.Router();
var sellers = require('../models/sellers'); //reference of models/sellers.js

// GET SELLER ROUTES
router.get('/api/sellers/', function(req, res, next){
    sellers.getAllSellers(function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent sellers'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all sellers'
            });
        }
    });
});

router.get('/api/sellers/:id', function (req, res, next) {
    sellers.getSellerById(req.params.id, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Seller dont found'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Return one seller'
            });
        }
    });
});

router.get('/api/sellers/verify/:seller', function (req, res, next) {
    let seller = JSON.parse(req.params.seller);
    console.log(seller);
    let cpfcnpj = seller.cpfcnpj;
    console.log(cpfcnpj);
    sellers.verifySeller(cpfcnpj, function (err, rows) {
        console.log(rows);
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Seller dont registered'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Seller registered'
            });
        }
    });
});

router.get('/api/sellers/validation/:seller', function (req, res, next) {
    let seller = JSON.parse(req.params.seller);
    let email = seller.email;
    let password = seller.password;
    sellers.validationSeller(email, String(password), function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Seller dont registered'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Seller registered'
            });
        }
    });
});

// POST SELLER ROUTES
router.post('/api/sellers/create/', function (req, res, next) {
    sellers.addSeller(req.body, function (err, count) {
        if (err) {
            res.json({
                status: 'error',
                data: err,
                message: 'Cannot possible register the seller'
            });
        }
        else {
            res.json({
                status: 'success',
                data: req.body,
                message: 'Register successfully'
            });
        }
    });
});

// DELETE SELLER ROUTES
router.delete('/api/sellers/delete/:id', function (req, res, next) {
    sellers.deleteSeller(req.params.id, function (err, count) {
        console.log(count)
        if (err || count.affectedRows == 0) {
            res.json({
                status: 'error',
                data: err,
                message: 'Cannot possible delete the seller'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Seller removed successfully'
            });
        }
    });
});

// UPDATE SELLER ROUTES
router.put('/api/sellers/update/:id', function (req, res, next){
    sellers.updateSeller(req.params.id, req.body, function (err, count){
        if(err || (count.affectedRows == 0)) {
            res.json({
                status: 'error',
                data: err,
                message: 'Cannot possible update the seller'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Seller update successfully'
            });
        }
    });
});

router.put('/api/sellers/changepassword/:id', function (req, res, next) {
    let condition = !!req.body.password;
    if (!condition) {
        res.status(500)
            .json({
                status: 'error',
                data: {},
                message: 'Cannot possible update the seller'
            });
    }
    else {
        sellers.changePasswordSeller(req.params.id, req.body, function (err, count) {
            if (err || (count.affectedRows == 0)) {
                res.json({
                    status: 'error',
                    data: err,
                    message: 'Cannot possible update the seller'
                });
            }
            else {
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Seller update successfully'
                });
            }
        });
    }

});

module.exports = router;

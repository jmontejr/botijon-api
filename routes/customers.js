var express = require('express');
var router = express.Router();
var customers = require('../models/customers'); //reference of models/customers

router.get('/api/customers/', function (req, res, next) {
    customers.getAllCustomers(function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent customers'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Return all customers'
            });
        }
    });
});

router.get('/api/customers/:id', function (req, res, next) {
    customers.getCustomerById(req.params.id, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Customer dont found'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Return one customer'
            });
        }
    });
});

router.get('/api/customers/validation/:customer', function(req, res, next){
    let customer = JSON.parse(req.params.customer);
    let email = customer.email;
    let password = customer.password;
    customers.validationCustomer(email, String(password), function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'Customer dont registered'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Customer registered'
            });
        }
    });
})

// POST CUSTOMER  ROUTES
router.post('/api/customers/create/', function (req, res, next) {
    customers.addCustomer(req.body, function (err, count) {
        if (err) {
            res.json({
                status: 'error',
                data: err,
                message: 'Could not register customer'
            });
        }
        else {
            res.json({
                status: 'success',
                data: req.body,
                message: 'Customer registered successfully'
            });
        }
    });
});


// DELETE CUSTOMER ROUTES
router.delete('/api/customers/delete/:id', function (req, res, next) {
    customers.deleteCustomer(req.params.id, function (err, count) {
        if (err || count.affectedRows == 0) {
            res.json({
                status: 'error',
                data: err,
                message: 'Cannot possible delete the customer'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Customer removed successfully'
            });
        }
    });
});

// UPDATE CUSTOMER ROUTES
router.put('/api/customers/changename/:id', function (req, res, next) {
    let condition = !!req.body.name;
    if(!condition){
        res.status(500)
        .json({
            status: 'error',
            data: {},
            message: 'Cannnot possible update the customer'
        });
    }
    else{
        customers.changeNameCustomer(req.params.id, req.body, function (err, count) {
            if (err || (count.affectedRows == 0)) {
                res.json({
                    status: 'error',
                    data: err,
                    message: 'Cannot possible update the customer'
                });
            }
            else {
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Customer update successfully'
                });
            }
        });
    }
});

router.put('/api/customers/changepassword/:id', function (req, res, next) {
    let condition = !!req.body.password;
    if(!condition){
        res.status(500)
        .json({
            status: 'error',
            data: {},
            message: 'Cannnot possible update the customer'
        });
    }
    else{
        customers.changePasswordCustomer(req.params.id, req.body, function (err, count) {
            if (err || (count.affectedRows == 0)) {
                res.json({
                    status: 'error',
                    data: err,
                    message: 'Cannot possible update the customer'
                });
            }
            else {
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Customer update successfully'
                });
            }
        });
    }
});

module.exports = router;

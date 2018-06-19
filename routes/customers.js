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
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
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

router.post('/api/customers/create/', function (req, res, next) {
    customers.addCustomer(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

router.delete('/api/customers/delete/:id', function (req, res, next) {
    customers.deleteCustomer(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});

router.put('/api/customers/update/:id', function (req, res, next) {
    customers.updateCustomer(req.params.id, req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count)
        }
    });
});

module.exports = router;

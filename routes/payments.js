var express = require('express');
var router = express.Router();
var payments = require('../models/payments'); //reference of models/payments.js

// GET PAYMENTS ROUTES
router.get('/api/payments/', function (req, res, next) {
    payments.getAllPayments(function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent payments'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all payments'
            });
        }
    });
});

router.get('/api/payments/:id', function (req, res, next) {
    payments.getPaymentById(req.params.id, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent payments'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned one payment'
            });
        }        
    })
});

router.get('/api/payments/bycustomer/:id', function (req, res, next) {
    payments.getAllPaymentsByCustomer(req.params.id, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent payments'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all payment'
            });
        }        
    })
});

router.get('/api/payments/toseller/:payment', function (req, res, next) {
    let condition = JSON.parse(req.params.payment);
    let seller_id = condition.seller_id;
    let address_id = condition.address_id;

    console.log(condition);
    console.log(seller_id);
    console.log(address_id);


    payments.getAllPaymentsToSeller(seller_id, address_id, function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent payments'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all payment'
            });
        }        
    })
});

router.get('/api/payments/typestatus/:payment', function (req, res, next) {
    let condition = JSON.parse(req.params.payment);
    let type = condition.payment_type;
    let status = condition.status;

    console.log(condition);
    console.log(type);
    console.log(status);

    payments.getPaymenstPerTypeAndStatus(type, status,function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent payments'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all payments ' + type + ' and ' + status
            });
        }
    });
});

// POST PAYMENTS ROUTES
router.post('/api/payments/create/', function (req, res, next) {
    payments.addPayment(req.body, function (err, count) {
        if(err){
            res.json({
                status:'error',
                data: {},
                message: 'Could not possible register the payment'
            });
        }
        else{
            res.json({
                status: 'success',
                data: req.body,
                message: 'Payment registered successfully'
            });
        }
    });
});

// UPDATE PAYMENTS ROUTES
router.put('/api/payments/changevalue/:id', function (req, res, next) {
    payments.changePaymentValue(req.params.id, req.body, function (err, count) {
        let condition = !!req.body.value;
        if (!condition) {
            res.status(500)
                .json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the payment value'
                });
        }
        else {
            if(err || (count.affectedRows == 0)){
                res.json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the payment value'
                });
            }
            else{
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Payment value update successfully'
                });
            }
        }
    });
});

router.put('/api/payments/changestatus/:id', function (req, res, next) {
    payments.changePaymentStatus(req.params.id, req.body, function (err, count) {
        let condition = !!req.body.value;
        if (!condition) {
            res.status(500)
                .json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the payment status'
                });
        }
        else {
            if(err || (count.affectedRows == 0)){
                res.json({
                    status: 'error',
                    data: {},
                    message: 'Could not possible update the payment status'
                });
            }
            else{
                res.json({
                    status: 'success',
                    data: count,
                    message: 'Status payment update successfully'
                });
            }
        }
    });
});

// DELETE PAYMENTS ROUTES
router.delete('/api/payments/delete/:id', function (req, res, next) {
    payments.deletePayment(req.params.id, function (err, count) {
        if(err || (count.affectedRows == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'Could not possible delete the payment'
            });
        }
        else{
            res.json({
                status: 'success',
                data: count,
                message: 'Payment delete successfully'
            });
        }
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();
var addresses = require('../models/addresses');

// GET ADDRESS ROUTES
router.get('/api/addresses/', function(req, res, next){
    addresses.getAllAdresses(function(err, rows) {
        if (err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent address'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all address'
            });
        }
    });
});

router.get('/api/addresses/getid/:address', function(req, res, next){
    let condition = JSON.parse(req.params.address);
    let address = condition.address;
    let number = condition.number;
    let cep = condition.cep;

    console.log(condition);
    console.log(address);
    console.log(number);
    console.log(cep);

    addresses.getAddressId(address, number, cep, function(err, rows){
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'This address is not found'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Return Address id'
            });
        }
    });
});

// POST ADDRESS ROUTES
router.post('/api/addresses/create/', function(req, res, next){
    addresses.addAddress(req.body, function(err, count){
        if(err){
            res.json({
                status: 'error',
                data: {},
                message: 'Could not register the address'
            });
        }
        else{
            res.json({
                status: 'success',
                data: req.body,
                message: 'Address registered successfully'
            });
        }
    });
});

// UPDATE ADDRESS ROUTES
router.put('/api/addresses/update/:id', function(req, res, next){
    addresses.updateAddress(req.params.id, req.body, function(err, count){
        if (err || (count.affectedRows == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'Could not possible update the address'
            });
        }
        else{
            res.json({
                status: 'success',
                data: count,
                message: 'Address update successfully'
            });
        }
    });
});

// DELETE REQUEST ROUTES
router.delete('/api/requests/:id', function (req, res, next) {
    addresses.deleteAddress(req.params.id, function (err, count) {
        if (err) {
            res.json({
                status: 'error',
                data: {},
                message: 'Cannot possible delete the address'
            });
        }
        else{
            res.json({
                status: 'success',
                data: count,
                message: 'Address removed successfully'
            });
        }
    });
});

module.exports = router;
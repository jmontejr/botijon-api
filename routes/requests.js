var express = require('express');
var router = express.Router();
var requests = require('../models/requests'); //reference of models/requests

// GET REQUESTS ROUTES
router.get('/api/requests/', function (req, res, next) {
    requests.getAllRequests(function (err, rows) {
        if (err || (rows.length == 0)) {
            res.json({
                status: 'error',
                data: {},
                message: 'There arent requests found'
            });
        }
        else {
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned all requests'
            });
        }
    });
});

router.get('/api/requests/:id', function(req, res, next) {
    requests.getRequestId(req.params.id, function (err, rows) {
        if(err || (rows.length == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'There arent requests found'
            });
        }
        else{
            res.json({
                status: 'success',
                data: rows,
                message: 'Returned one request'
            });
        }
    });
});

// POST REQUESTS ROUTES
router.post('/api/requests/create/', function(req, res, next) {
    requests.addRequest(req.body, function (err, count) {
        if(err){
            res.json({
                status: 'error',
                data: {},
                message: 'Could not register the request'
            });
        }
        else{
            res.json({
                status: 'success',
                data: req.body,
                message: 'Request registered successfully'
            });
        }
    });
});

// UPDATE REQUESTS ROUTES
router.put('/api/requests/update/:id', function (req, res, next) {
    requests.updateRequest(req.params.id, req.body, function (err, count) {
        if (err || (count.affectedRows == 0)){
            res.json({
                status: 'error',
                data: {},
                message: 'Could not possible update the request'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Request update successfully'
            });
        }
    });
});

// DELETE REQUESTS ROUTES
router.delete('/api/requests/delete/:id', function(req, res, next) {
    requests.deleteRequest(req.params.id, function (err, count) {
        if(err){
            res.json({
                status: 'error',
                data: {},
                message: 'Cannot possible delete the request'
            });
        }
        else {
            res.json({
                status: 'success',
                data: count,
                message: 'Request removed successfully'
            });
        }
    })
});

module.exports = router;
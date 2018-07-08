var express = require('express');
var router = express.Router();
var users = require('../models/users'); //reference of models/users.js

// GET USER ROUTES
router.get('/api/users/', function(req, res, next) {
  users.getAllUsers(function(err, rows){
    if (err || (rows.length == 0)){
      res.json({
        status: 'error',
        data: {},
        message: 'There arent users'
      });
    }
    else {
      res.json({
        status: 'success',
        data: rows,
        message: 'Return all users'
      });
    }
  });
});

router.get('/api/users/:id', function (req, res, next) {
  users.getUserById(req.params.id, function (err, rows) {
    if (err || (rows.length == 0)) {
      res.json({
        status: 'error',
        data: {},
        message: 'User dont found'
      });
    }
    else {
      res.json({
        status: 'success',
        data: rows,
        message: 'Return one user'
      });
    }
  });
});
 
router.get('/api/users/validation/:user', function(req, res, next) {
  let user = JSON.parse(req.params.user);
  let email = user.email;
  let password = user.password;
  users.validationUser(email, String(password), function(err, rows) {
    if (err || (rows.length == 0)) {
      res.json({
        status: 'error',
        data: {},
        message: 'User dont registered'
      });
    }
    else {
      res.json({
        status: 'success',
        data: rows,
        message: 'User registered'
      });
    }
  });
});

// POST USER ROUTES
router.post('/api/users/create/', function(req, res, next) {
  users.addUser(req.body, function(err, count) {
    if(err){
      res.json({
        status: 'error',
        data: err,
        message: 'Could not register user'
      });
    }
    else{
      res.json({
        status: 'success',
        data: req.body,
        message: 'Registered successfully'
      });
    }
  });
});

// DELETE USER ROUTES
router.delete('/api/users/delete/:id', function(req, res, next) {
  users.deleteUser(req.params.id, function(err, count) {
    console.log(count)
    if (err || count.affectedRows == 0){
      res.json({
        status: 'error',
        data: err,
        message: 'Cannot possible delete the user'
      });
    }
    else{
      res.json({
        status: 'success',
        data: count,
        message: 'User removed successfully'
      });
    }
  });
});

// UPDATE USER ROUTES
router.put('/api/users/update/:id', function(req, res, next) {
  let condition = !!req.body.password;
  if(!condition){
    res.status(500)
      .json({
        status: 'error',
        data: {},
        message: 'Cannot possible update the user'
      });
  }
  else{
    users.updateUser(req.params.id, req.body, function (err, count) {
      if (err || (count.affectedRows == 0)) {
        res.json({
          status: 'error',
          data: err,
          message: 'Cannot possible update the user'
        });
      }
      else {
        res.json({
          status: 'success',
          data: count,
          message: 'User update successfully'
        });
      }
    });
  }
  
});

module.exports = router;

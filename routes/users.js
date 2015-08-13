var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Product = require("../models/User.js");

// get the users
router.get('/', function(req, res, next){
  Log.i("return the list of users");
  res.status(200).json({
    "success" : "TODO : List of users"
  })
});

// get the user with given id
router.get('/:id', function(req, res, next) {
  Log.i("get user by id "+req.params.id);
  res.status(200).json({
    "success" : "TODO : get user by id"
  })
});

// create a new user
router.post('/', function(req, res, next) {
  Log.i("create a new user");
  res.status(201).json({
    "success" : "TODO : create a new user"
  })
});

//update a user
router.put('/:id', function(req, res, next) {
  Log.i("update the user with id "+req.params.id);
  res.status(202).json({
    "success" : "TODO : update user"
  })
});

// delete a user
router.delete('/:id', function(req, res, next) {
  Log.i("delete the user with id "+req.params.id);
  res.status(204).json({
    "success" : "delete user"
  })
});

//
///* GET /todos listing. */
//router.get('/', function(req, res, next) {
//    Todo.find(function (err, todos) {
//        if (err) return next(err);
//        res.json(todos);
//    });
//});
//
///* GET /todos/id */
//router.get('/:id', function(req, res, next) {
//    Todo.findById(req.params.id, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* POST /todos */
//router.post('/', function(req, res, next) {
//    console.log(req.body);
//    Todo.create(req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* PUT /todos/:id */
//router.put('/:id', function(req, res, next) {
//    Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});
//
///* DELETE /todos/:id */
//router.delete('/:id', function(req, res, next) {
//    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//        if (err) return next(err);
//        res.json(post);
//    });
//});

module.exports = router;
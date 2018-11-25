'use strict';

var mongoose = require('mongoose'),
  //Group = mongoose.model('Group'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};


exports.list_all_groups = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(group);
  });
};

exports.create_a_group = function(req, res) {
  var new_group = new Group(req.body);
  new_group.save(function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};

exports.read_a_group = function(req, res) {
  Group.findById(req.params.groupId, function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};

exports.update_a_group = function(req, res) {
  Group.findOneAndUpdate({_id: req.params.groupId}, req.body, {new: true}, function(err, group) {
    if (err)
      res.send(err);
    res.json(group);
  });
};

exports.delete_a_group = function(req, res) {
  Group.remove({
    _id: req.params.groupId
  }, function(err, group) {
    if (err)
      res.send(err);
    res.json({ message: 'Group successfully deleted' });
  });
};
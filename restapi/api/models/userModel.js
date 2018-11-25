'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    mlhid: {
        type: String,
    },
    fname: {
        type: String,
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    joined_date: {
        type: Date,
        default: Date.now
    },
    about: {
        type: String
    },
    phone: {
        type: String,
  }
});


module.exports = mongoose.model('User', UserSchema);
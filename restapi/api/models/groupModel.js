'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GroupSchema = new Schema({
    creusrid: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    credate: {
        type: Date,
        default: Date.now
    },
    about: {
        type: String
    }
});
module.exports = mongoose.model('Group', GroupSchema);
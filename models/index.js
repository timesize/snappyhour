var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/primary");


var Primary = require('./primary');

module.exports.Primary = Primary;

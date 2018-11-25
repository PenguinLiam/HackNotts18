var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/db'); 
  bodyParser = require('body-parser');
  var User = require('./api/models/userModel');
  var Group = require('./api/models/groupModel');
  mongoose.Promise = global.Promise;
  

  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/lfhRoutes');
routes(app);

app.listen(port);

console.log('LFH RESTful API server started on: ' + port);
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Session = require('./api/models/sessionModel'), //created model loading here
  Member = require('./api/models/memberModel'), //created model loading here
  Style = require('./api/models/styleModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cellarCheckInDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var sessionRoutes = require('./api/routes/sessionRoutes'); //importing route
sessionRoutes(app); //register the route

 var memberRoutes = require('./api/routes/memberRoutes'); //importing route
 memberRoutes(app); //register the route

 var styleRoutes = require('./api/routes/styleRoutes'); //importing route
 styleRoutes(app); //register the route



app.listen(port);


console.log('cellarCheckIn RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
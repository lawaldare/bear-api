const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/bearworld');
mongoose.Promise = global.Promise;

//configure app to use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//initialize routes
app.use('/api', routes); 

//error handling middleware
app.use(function(err, req, res, next) {
	res.status(422).send({ err: err.message });
});

//listening for requests
app.listen(process.env.PORT || 8080, function() {
	console.log('now listening for request...');
});

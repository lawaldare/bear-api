const express = require('express');
const router = express.Router();
const bear = require('../models/bears');

//get a list of ninjas from the db
router.get('/bears', function(req, res, next) {
	Ninja.find({ name: req.query.name }).then(function(ninja) {
		res.send(ninja);
	});
});

//add a new ninja to the db
router.post('/bears', function(req, res, next) {
	Ninja.create(req.body)
		.then(function(ninja) {
			res.send(ninja);
		})
		.catch(next);
});

//update a ninja in the db
router.put('/bears/:id', function(req, res, next) {
	Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
		Ninja.findOne({ _id: req.params.id }).then(function(ninja) {
			res.send(ninja);
		});
	});
});

//delete a ninja from the db
router.delete('/bears/:id', function(req, res, next) {
	Ninja.findByIdAndRemove({ _id: req.params.id }).then(function(ninja) {
		res.send(ninja);
	});
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Bear = require('../models/bears');

//get a bear from the db by the ID
router.get('/api/bears', function(req, res, next) {
	Bear.findById({ _id: req.param.id }).then(function(bear) {
		res.send(bear);
	});
});

//add a new ninja to the db
router.post('/api/bears', function(req, res, next) {
	Bear.create(req.body)
		.then(function(bear) {
			res.send(bear);
		})
		.catch(next);
});

//update a ninja in the db
router.put('/api/bears/:id', function(req, res, next) {
	Bear.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
		Bear.findOne({ _id: req.params.id }).then(function(bear) {
			res.send(bear);
		});
	});
});

//delete a ninja from the db
router.delete('/api/bears/:id', function(req, res, next) {
	Bear.findByIdAndRemove({ _id: req.params.id }).then(function(bear) {
		res.send(bear);
	});
});

module.exports = router;

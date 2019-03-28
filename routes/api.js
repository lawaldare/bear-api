const express = require('express');
const router = express.Router();
const Bear = require('../models/bears');

//get a bear from the db by the ID
router.get('/bears/:id', (req, res, next) => {
	Bear.findById({ _id: req.params.id }).then(
		(bear) => {
			res.send(bear);
		},
		(e) => {
			res.status(400).send(e);
		}
	);
});

//get all the list of bear from the database
router.get('/bears', (req, res, next) => {
	Bear.find().then(
		(bear) => {
			res.send({ bear });
		},
		(e) => {
			res.status(400).send(e.message);
		}
	);
});

//add a new ninja to the db
router.post('/bears', (req, res, next) => {
	Bear.create(req.body)
		.then((bear) => {
			res.send(bear);
		}, (err) => {
			res.status(400).send(err.message);
		})
});

//update a ninja in the db
router.put('/bears/:id', (req, res, next) => {
	Bear.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
		Bear.findOne({ _id: req.params.id }).then(
			(bear) => {
				res.send(bear);
			},
			(e) => {
				res.status(400).send(e.message);
			}
		);
	});
});

//delete a ninja from the db
router.delete('/bears/:id', (req, res, next) => {
	Bear.findByIdAndRemove({ _id: req.params.id }).then((bear) => {
		res.send(bear);
	}, (e) => {
		res.status(400).send(e.message);
	});
});

module.exports = router;

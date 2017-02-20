var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['drinks']);

router.get('/drinks', function(req, res, next) {
	console.log('drinks route working..');
	//res.send('worked');
	//res.send('worked');
	db.drinks.find(function(err, docs) {
		res.json(docs);
	});

});


module.exports = router;
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['customers']);

router.get('/customers', function(req, res, next) {
	console.log('entrees route working..');
	//res.send('worked');
	//res.send('worked');
	db.customers.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});

router.post('/customers', function(req, res, next) {
  console.log('in the customer post route.....');
  //do math here to calculate the 
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://rt275:hello123@ds163340.mlab.com:63340/posdb', ['customers']);

router.get('/customers', function(req, res, next) {
	console.log('entrees route working..');
	//res.send('worked');
	//res.send('worked');
	db.customers.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});

router.get('/customers/max', function(req, res, next) {
	console.log('calc max route working..');
	db.customers.find().sort({_id: -1}, function (err, docs) {
    // docs is now a sorted array
		if (err) {
			console.log(err);
		}
		res.json(docs);
	});

});



router.post('/customers', function(req, res, next) {
  console.log('in the customer post route.....');
	console.log(req.body);
	// db.customers.insert({
	// 	_id:
	// });
});

module.exports = router;

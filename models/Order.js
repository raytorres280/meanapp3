var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['orders']);

router.get('/orders', function(req, res, next) {
	console.log('orders route working..');
	//res.send('worked');
	//res.send('worked');
	db.inventory.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});

router.post('/orders', function(req, res, next) {
	console.log('orders post route working...');
  res.send('hello');


});


module.exports = router;

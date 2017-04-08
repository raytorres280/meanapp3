var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['orders']);

router.get('/orders', function(req, res, next) {
	console.log('orders route working..');
	//res.send('worked');
	//res.send('worked');
	db.orders.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});

router.post('/orders', function(req, res, next) {
	console.log('orders post route working...');
	//learned incremental id's in mongodb are bad, even if I never scale past one server..
	db.orders.insert({
		date: Date(),
		custID: 0,
		items: req.body,
		active: true,
		paid: false
	});
	console.log(req.body);
  res.send('hello from the orders post route');
});


module.exports = router;

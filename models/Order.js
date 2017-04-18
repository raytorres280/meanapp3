var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://rt275:fucktart280@ds163340.mlab.com:63340/posdb', ['orders']);

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
	// console.log(req);
	//learned incremental id's in mongodb are bad, even if I never scale past one server..
	// db.orders.insert({
	// 	date: Date(),
	// 	custID: 0,
	// 	items: req.body,
	// 	active: true,
	// 	paid: false
	// });

	db.orders.insert({
		date: Date(),
		custID: req.body.customer._id,
		items: req.body.cart,
		active: true,
		paid: false
	})
	// console.log(req.body);
  res.send('hello from the orders post route');
});


module.exports = router;

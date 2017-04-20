var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://rt275:hello123@ds163340.mlab.com:63340/posdb', ['inventory']);

router.get('/inventory', function(req, res, next) {
	console.log('inventory route working..');
	//res.send('worked');
	//res.send('worked');
	db.inventory.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});

router.get('/inventory/:name', function(req, res, next) {
	console.log('inventory single ingredient route working...');
	console.log(req.params.name);
	// console.log(decodeURI(req.params.name)); unnecessary, req.params decodes for me....

	db.inventory.findOne({name: req.params.name}, function(err, doc) {
		console.log(doc.qty);console.log(req.params.qty);

		if (doc.qty > 0) {
			res.send(true);
		}
		else {
			res.send(false);
		}
	});

});

router.put('/inventory/:name', function(req, res) {
	console.log('in the update inventory route..');
	// console.log(req.params.name);
	console.log(req.params); //this is the name for url param...
	console.log(req.body); //this is data/object passed.

	db.inventory.findAndModify({
		query: {name: req.params.name},
		update: { $set: { "qty": req.body.qty} }
	}, function(err, doc) {
			console.log(err);
	});
	res.send('increased...');
});


module.exports = router;

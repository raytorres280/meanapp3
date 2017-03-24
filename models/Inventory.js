var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['inventory']);

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
		console.log(doc.qty);

		if (doc.qty > 0) {
			res.send(true);
		}
		else {
			res.send(false);
		}
	});

});


module.exports = router;

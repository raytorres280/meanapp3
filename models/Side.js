var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['sides']);



router.get('/sides', function(req, res, next) {
	console.log('entrees route working..');
	//res.send('worked');
	//res.send('worked');
	db.sides.find(function(err, docs) {
		res.json(docs);
		// console.log(docs);
	});

});


module.exports = router;
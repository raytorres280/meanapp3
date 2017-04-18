var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://rt275:fucktart280@ds163340.mlab.com:63340/posdb', ['menu_items', 'inventory']);

router.get('/menu_items', function(req, res, next) {
	console.log('menu items route working..');
	//res.send('worked');
	//res.send('worked');
	db.menu_items.find(function(err, docs) {
		res.json(docs);
	});

});


module.exports = router;

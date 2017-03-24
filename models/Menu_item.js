var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['menu_items', 'inventory']);

router.get('/menu_items', function(req, res, next) {
	console.log('menu items route working..');
	//res.send('worked');
	//res.send('worked');
	db.menu_items.find(function(err, docs) {
		res.json(docs);
	});

});


module.exports = router;

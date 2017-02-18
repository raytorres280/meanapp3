var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://foo:bar@localhost:27017/posdb', ['drinks', 'entrees', 'sides']);
//create User

//read Users
router.get('/', function(req, res) {
	res.render('../views/index.html');
});


router.get('/test', function(req, res) {
	res.send('caught test');

});

// router.get()
//read User
router.get('/api/users', function(req, res, next) {
	console.log('model route working..');
	// db.findOne({
	// 	name: nm,
	// 	password: pwd
	// });
	db.drinks.find(function(err, docs) {
		if (err) {
			throw err;
		}
		console.log(docs);
		res.json(docs);
	});

});
//update User


//delete User


module.exports = router;

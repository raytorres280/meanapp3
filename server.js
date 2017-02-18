var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/User');
//console.log(User);
var port = 3000;

var app = express();

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/posdb', ['drinks', 'entrees', 'sides']);




app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//link client angular up..
app.use(express.static(__dirname + '/client'));

//favicon

//below is non angular way...

//var home = require('./controllers/HomeController');
//var drink = require('./controllers/DrinkController');





app.get('/', function(req, res) {
	res.render('index.html');
});



app.get('/test', function(req, res, next) {
	//res.send('caught test');
	db.drinks.find(function(err, docs) {
		res.json(docs);
	});

});

app.get('/api/drinks', function(req, res, next) {
	console.log('drinks route working..');
	//res.send('worked');
	//res.send('worked');
	db.drinks.find(function(err, docs) {
		res.json(docs);
	});

});

app.get('/api/entrees', function(req, res, next) {
	console.log('entree route working..');
	db.entrees.find(function(err, docs) {
		res.json(docs);
	});
});

app.get('/api/sides', function(req, res, next) {
	console.log('sides route working..');
	db.sides.find(function(err, docs) {
		res.json(docs);
	});
});
app.use('/', User);
app.use('/test', User);
app.use('#/api/user', User);


app.listen(3000);
console.log('server running on port ' + port.toString() + '...');

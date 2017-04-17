var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var User = require('./models/User');
var port = 3000;

// model/route files
var Index = require('./models/Index');
var Drink = require('./models/Drink');
var Entree = require('./models/Entree');
var Side = require('./models/Side');
var Menu_item = require('./models/Menu_item');
var Inventory = require('./models/Inventory');
var Order = require('./models/Order');
var Customer = require('./models/Customer');

var app = express();

// var mongojs = require('mongojs');
// var db = mongojs('mongodb://localhost:27017/posdb', ['drinks', 'entrees', 'sides']);


var favicon = require('serve-favicon');

app.use(favicon('favicon.ico'));


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

// app.get('/', function(req, res) {
// 	res.render('index.html');
// });

app.use('/', Index);

app.use('/api', Entree);
app.use('/api', Side);
app.use('/api', Drink);

app.use('/api', Menu_item);
app.use('/api', Inventory);
app.use('/api', Order);
app.use('/api', Customer);

app.listen(3000);
console.log('server running on port ' + port.toString() + '...');

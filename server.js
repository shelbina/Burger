'use strict';

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var models = require('./models');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(methodOverride('_method'))
//EXPORT TO HANDLEBAARS THE TEMPLATE WITH A MUSTACHE!

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log(`listening on port ${port}`);
});
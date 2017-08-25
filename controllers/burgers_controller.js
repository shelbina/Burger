// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require('express');
var router = express.Router();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burger = require('../models')['burgers'];

router.get('/', function(req, res) {
    res.redirect('/burgers')
});


router.get('/burgers', function(req, res) {
    burger.findAll({}).then(function(data) {
        var hbsObject = { burgers: data }
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/insert', function(req, res) {
    burger.create({ burger_name: req.body.burger_name }, { devoured: req.body.devoured }).then(function(data) {
        res.redirect('/burgers')
    })
});

router.put('/burgers/update/:id', function(req, res) {
    burger.update({ devoured: req.body.devoured }, {
        fields: ['devoured'],
        where: { id: req.params.id }
    }).then(function(data) {
    	res.redirect('/burgers')
    });
});

module.exports = router;
/**
 * #agni
 * 
 * Simple router and MVC web application skeleton for node.js
 */

/**
 * Module dependencies
 */

var express = require('express');
var init = require('./init');
var config = require('./config');

/**
 * Create express instance
 */

var app = express();

/**
 * Initialize app
 */

init(app);

//Listen to connections
app.listen(config.get('port'));

/**
 * Export express app
 */

module.exports = app;
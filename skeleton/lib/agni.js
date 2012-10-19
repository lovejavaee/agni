/**
 * Module dependencies
 */

var express = require('express');
var framework = require('agni-framework');

/**
 * Create express instance
 */

var app = express();

/**
 * Boot agni
 */

framework.boot(app);

/**
 * Export express app
 */

module.exports = app;
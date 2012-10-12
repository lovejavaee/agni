/**
 * Module dependencies
 */

var express = require('express');
var path = require('path');
var Framework = require('agni-framework').Framework;

/**
 * Create express instance
 */

var app = express();

/**
 * Boot agni
 */

var appDir = path.join(__dirname, '..', 'app');
var framework = new Framework(appDir);
framework.boot(app);

/**
 * Export express app
 */

module.exports = app;
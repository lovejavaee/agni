/**
 * Module dependencies
 */

var express = require('express');
var framework = require('agni-framework');

/**
 * Create express instance
 */

var app = module.exports = express();

/**
 * Boot agni
 */

framework.boot(app);
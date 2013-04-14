/**
 * Module dependencies
 */

var express = require('express');
var path = require('path');

/**
 * You can add middleware here
 */

exports.addMiddleware = function(app) {
  // Request body parser
  app.use(express.bodyParser());

  // Request size limit
  app.use(express.limit('5mb'));

  // Logger
  app.use(express.logger({
    format: 'dev'
  }));

  // Use cookies
  app.use(express.cookieParser());

  // Fake PUT and DELETE methods
  app.use(express.methodOverride());

  // Compression
  app.use(express.compress());

  // Static server
  var staticOptions = {
    maxAge: 86400000
  }
  app.use('/public', express.static(path.join(app.get('appDir'), 'public'),
      staticOptions));
}
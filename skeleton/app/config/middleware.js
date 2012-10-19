/**
 * Module dependencies
 */

var express = require('express');
var path = require('path');

/**
 * You can add middleware here
 */

module.exports = function addMiddleware(app) {
  //Request body parser
  app.use(express.bodyParser());
  
  //Request size limit
  app.use(express.limit('5mb'));
  
  //Favicon
  app.use(express.favicon(path.join(app.get('appDir'), 'public' , 'favicon.ico')));
  
  //Logger
  app.use(express.logger({format: 'dev'}));
  
  //Use cookies
  app.use(express.cookieParser());
  
  //Use sessions
  app.use(express.cookieSession({
    secret: 'my secret'
  }));
  
  //Fake PUT and DELETE methods
  app.use(express.methodOverride());
  
  //Static server
  var staticOptions = {
    maxAge: 86400000
  }
  app.use('/public', express.static(path.join(app.get('appDir'), 'public'), staticOptions));
}
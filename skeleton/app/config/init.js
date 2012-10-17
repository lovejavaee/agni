var express = require('express');
var path = require('path');

/**
 * You can add middleware here
 */

module.exports = function(app) {
  //Use cookies
  app.use(express.cookieParser());
  
  //Use sessions
  app.use(express.cookieSession({
    secret: 'my secret'
  }));
  
  //Fake PUT and DELETE methods
  app.use(express.methodOverride());
  
  //Static server
  app.use('/public', express.static(path.join(__dirname, '..', 'public'), {maxAge: 86400000}));
}
var express = require('express');

/**
 * To be run before app.listen()
 * 
 * You can add middleware here
 */

module.exports = function(app) {
  //Use cookies
  app.use(express.cookieParser());
  
  //Use sessions
  app.use(express.cookieSession({
    secret: 'my secret'
  }));
}
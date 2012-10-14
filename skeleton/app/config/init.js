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
  
  //Fake PUT and DELETE methods by providing a POST field called '_method'
  app.use(express.methodOverride());
  
  //Static server
  app.use('/public', express.static('../public', {maxAge: 86400000}));
}
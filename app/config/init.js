var express = require('express');

module.exports = function(app) {
  //Use cookies
  app.use(express.cookieParser());
  
  //Use sessions
  app.use(express.cookieSession({
    secret: 'my secret'
  }));
}
/**
 * Module dependencies
 */

var cons = require('consolidate');
var config = require('./config');
var controllers = require('./controllers');
var Router = require('./router');
var Controller = require('./controller');

/*
 * Initialize app
 * 
 * @api public
 */

module.exports = function(app) {
  var engine = config.get('engine');
  var extension = config.get('extension');
  app.engine(extension, cons[engine]);
  app.set('view engine', extension);
  app.set('views', './app/views');
  
  bindRoutes(app);
}

/**
 * Route all requests
 */

function bindRoutes(app) {
  //Build controller list and bind routes
  controllers.buildList(function() {
    app.all('*', function(req, res) {
      var router = new Router(req, res);
      router.route(function(err, found) {
        if(err) throw err;
      });
    });
  });
}
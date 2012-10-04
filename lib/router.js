/**
 * Module dependencies
 */

var config = require('./config');
var Controller = require('./controller');
var controllers = require('./controllers');

/**
 * Constants
 */

var NIL = 'nil';

/**
 * Router constructor
 * 
 * @param {Object} Request
 * @param {Object} Response
 * @param {Object} Dependency injection
 * @api public
 */

function Router(req, res, DI) {
  if(DI) {
    this.controllers = DI.controllers;
    this.config = DI.config;
  } else {
    this.controllers = controllers;
    this.config = config;
  }
  this.req = req;
  this.res = res;
  this.segments = null;
  this.origSegments = null;
  this.i = null;
}

/**
 * Execute the controller which corresponds to this path
 * 
 * @api public
 */

Router.prototype.route = function(callback) {
  var reqURL = this.req.url;
  
  //Route '/' to home
  if(reqURL === '/' || reqURL === '') {
    reqURL = '/' + this.config.get('home');
  }
  
  this.segments = reqURL.split('/');
  this.origSegments = this.segments.slice();
  
  var methodName;
  
  for(this.i = (this.segments.length - 1); this.i > 0; this.i--) {
    //Look for nil function
    if(this._applyRouteIfExists(NIL)) {
      callback(null, true);
      return true;
    }
    
    //Or look for method
    methodName = this.segments.pop();
    if(this._applyRouteIfExists(methodName)) {
      callback(null, true);
      return true;
    }
  }
  
  this.res.status(404).send('Page not found');
  callback(null, false);
}

Router.prototype._applyRouteIfExists = function(methodName) {
  var url = this.segments.join('/');
  var fn = this._getMethod(url, methodName);
  if(fn !== false) {
    var args = this.origSegments.slice(this.i + 1);
    var controllerScope = new Controller(this.req, this.res, url);
    fn.apply(controllerScope, args);
    this.res.status(200);
    return true;
  } else {
    return false;
  }
}

/**
 * @api private
 */

Router.prototype._getMethod = function(url, method) {
  var cntrl = this.controllers.get(url);
  var exists = ((cntrl !== false) && (typeof cntrl[method] === 'function'));
  if(exists) {
    return cntrl[method];
  } else {
    return false;
  }
}

module.exports = Router;
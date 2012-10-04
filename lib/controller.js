/**
 * Module dependencies
 */

var h = require('./helpers');
var NestedView = require('./nested_view');
var factory = require('./factory');

/**
 * Controller constructor
 * 
 * @api public
 */

function Controller(req, res, path) {
  this.req = req;
  this.res = res;
  this.path = path;
}

/**
 * Render a view
 * 
 * @api public
 */

Controller.prototype.render = function(view, locals, callback) {
  if(! view) {
    view = h.ltrimSlash(this.path);
  }
  
  if(! locals) {
    locals = {}
  }
  
  locals['agni'] = {
    lib: this.lib,
    model: this.model
  };
  
  this.res.render(view, locals, callback);
}

/**
 * Nest a view inside another
 * 
 * @api public
 */

Controller.prototype.nest = function(view, locals) {
  if(! view) {
    view = h.ltrimSlash(this.path);
  }
  
  return (new NestedView(this.res, view, locals));
}

/**
 * Library factory
 */

Controller.prototype.lib = function(name) {
  if(! name) {
    name = h.ltrimSlash(this.path);
  }
  var lib = require('../app/libraries/' + name);
  return lib;
}

/**
 * Model factory
 */

Controller.prototype.model = function(name) {
  if(! name) {
    name = h.ltrimSlash(this.path);
  }
  var model = require('../app/models/' + name);
  return model;
}

module.exports = Controller;
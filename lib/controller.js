/**
 * Module dependencies
 */

var express = require('express');
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
  this.cookies = req.cookies;
  this.session = express.cookieSession;
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
 * Service factory
 * 
 * @api public
 */

Controller.prototype.service = function(name) {
  if(! name) {
    name = h.ltrimSlash(this.path);
  }
  return factory.getService(name);
}

/**
 * Model factory
 * 
 * @api public
 */

Controller.prototype.model = function(name) {
  if(! name) {
    name = h.ltrimSlash(this.path);
  }
  return factory.getModel(name);
}

module.exports = Controller;
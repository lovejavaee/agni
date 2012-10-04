var h = require('./helpers');
var NestedView = require('./nested_view');
var util = require('util');

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

module.exports = Controller;
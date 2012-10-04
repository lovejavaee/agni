/**
 * Module dependencies
 */

var fs = require('fs');
var path = require('path');

/**
 * Controller constructor
 * 
 * @api public
 */

function Controllers() {
  //Controller directory
  this.controllerDir = './app/controllers';
  //Controller list
  this.controllers = {};
}

/**
 * Build controller list
 * 
 * @api public
 */

Controllers.prototype.buildList = function(done) {
  this._processDir('');
  done(this.controllers);
}

/**
 * Get a controller
 * 
 * @return {Object|false}
 * @api public
 */

Controllers.prototype.get = function(path) {
  if(this.controllers.hasOwnProperty(path)) {
    return this.controllers[path];
  } else {
    return false;
  }
}

/**
 * Get controller list
 * 
 * @return {Object}
 * @api public
 */

Controllers.prototype.getList = function() {
  return this.controllers;
}

/**
 * Iterate through a directory
 *
 * @api private
 */

Controllers.prototype._processDir = function(dir) {
  var self = this;
  
  //Read directory
  var list = fs.readdirSync(this.controllerDir + '/' + dir);
  
  //Iterate on directory contents
  list.forEach(function(element, index, array) {
    var elementPath = dir + '/' + element;
    var stat = fs.statSync(self.controllerDir + '/' + elementPath);
    
    if(stat.isDirectory()) {
      //If it is a directory, call this function recursively
      self._processDir(elementPath);
      
    } else if(stat.isFile()) {
      //If it is a file, add to the controller list
      self._processFile(elementPath);
    }
  });
  return true;
}

/**
 * Add a file to the controller list
 *
 * @api private
 */

Controllers.prototype._processFile = function(file) {
  //Remove extension
  var basename = file.substring(0, file.lastIndexOf('.'));
  
  //Store controller
  var module = require(path.normalize('../' + this.controllerDir + basename));
  this.controllers[basename] = module;
}

/**
 * Set controller directory (only for testing)
 */

Controllers.prototype.setDir = function(newDir) {
  this.controllerDir = newDir;
}

module.exports = (new Controllers());
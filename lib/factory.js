/**
 * Module dependencies
 */

var path = require('path');

/**
 * Model factory
 */

var getModel = exports.getModel = function(name) {
  var model = require(path.normalize('../app/models/' + name));
  return model;
}

/**
 * Service factory
 */

var getService = exports.getService = function(name) {
  var service = require(path.normalize('../app/services/' + name));
  if((typeof service) === 'function') {
    service.prototype.service = getService;
    service.prototype.model = function(modelName) {
      if(! modelName) {
        modelName = name;
      }
      return getModel(name);
    }
  } else {
    service.service = getService;
    service.model = function(modelName) {
      if(! modelName) {
        modelName = name;
      }
      return getModel(name);
    }
  }
  return service;
}
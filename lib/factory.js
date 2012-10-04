/**
 * Load a model
 */

exports.getModel = function(modelPath) {
  var model = require('../app/models/' + modelPath);
  return model;
}

/**
 * Load a library
 */

exports.getLibrary = function(libPath) {
  var lib = require('../app/libraries/' + libPath);
  return lib;
}
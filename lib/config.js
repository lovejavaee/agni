/**
 * Module dependencies
 */

var settings = require('../app/config/config');

var config = {}

/**
 * Get a configuration item
 */

config.get = function(item) {
  //Look for the environment-specific setting
  var env = settings.current;
  if(! env) {
    //If no environment is specified, it defaults to 'development'
    env = 'development';
  }
  
  if(settings.hasOwnProperty(env) && settings[env].hasOwnProperty(item)) {
    return settings[env][item];
  }
  
  //Look for item in the 'all' settings
  if(settings.hasOwnProperty('all') && settings.all.hasOwnProperty(item)) {
    return settings.all[item];
  }
  
  return false;
}

module.exports = config;
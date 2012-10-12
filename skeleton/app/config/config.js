/**
 * Environments
 */

var env = module.exports = {
  'all': {},
  'development': {},
  'production': {}
}

//Current environment (default is 'development')
env.current = 'development';

/**
 * Settings for all environments
 */

//Web server port
env.all.port = 3000;

//Home page
env.all.home = 'home';

//Default template engine
env.all.engine = 'ejs';

//Default view extension
env.all.extension = 'html';

//Static file server options 
env.all.staticOptions = {
  //Browser cache age (in milliseconds)
  maxAge: 86400000
};

/**
 * Development-specific settings
 */

//Whether to daemonize the process
env.development.daemonize = false;

//Logger options
//Set to false for no logging at all
//Set to {} for default options
env.development.loggerOptions = {
  immediate: true,
  format: 'dev'
};

/**
 * Production-specific settings
 */

//Whether to daemonize the process
env.production.daemonize = true;

//Logger options
//Set to false for no logging at all
//Set to {} for default options
env.production.loggerOptions = {
  immediate: false,
  format: 'tiny'
}
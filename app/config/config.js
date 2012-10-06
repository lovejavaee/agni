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

env.development.loggerOptions = {
  immediate: true,
  format: 'dev'
}

/**
 * Production-specific settings
 */

env.production.loggerOptions = {
  immediate: false,
  format: 'tiny'
}
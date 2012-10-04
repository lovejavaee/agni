/**
 * Available environments
 */

var envs = {
  'all': {},
  'development': {},
  'production': {}
}

/**
 * Set current environment (default is 'development')
 */

envs.current = 'development';

/**
 * Settings for all environments
 */

//Home page
envs.all.home = 'home';

//Web server port
envs.all.port = 3000;

//Default template engine
envs.all.engine = 'ejs';

//Default view extension
envs.all.extension = 'html';

/**
 * Development-specific settings
 */

/**
 * Production-specific settings
 */

//End of settings

module.exports = envs;
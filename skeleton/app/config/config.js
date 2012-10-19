/*******************************************************************************
 * 
 * Application settings
 * 
 ******************************************************************************/

module.exports = function configure(app) {

  /*----------------------------------------------------------------------------
    Current environment
   ---------------------------------------------------------------------------*/

  app.set('env', 'development');

  /*----------------------------------------------------------------------------
    Settings for all environments
   ---------------------------------------------------------------------------*/

  //Web server port
  app.set('port', 3000);

  //Default controller, to be called on '/' requests
  app.set('defaultController', 'index');

  //Default template engine
  app.set('engine', 'ejs');

  //Default view extension
  app.set('extension', 'html');

  /*----------------------------------------------------------------------------
    Development settings
   ---------------------------------------------------------------------------*/

  if(app.get('env') === 'development') {
    //Add development-specific settings here
  }

  /*----------------------------------------------------------------------------
    Production settings
   ---------------------------------------------------------------------------*/

  if(app.get('env') === 'production') {
    //Add production-specific settings here
  }
}
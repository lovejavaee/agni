/*******************************************************************************
 * Application settings
 ******************************************************************************/

module.exports = function configure(app) {

  /*----------------------------------------------------------------------------
    Settings for all environments
   ---------------------------------------------------------------------------*/

  // Web server port
  app.set('port', 3000);

  // Default template engine
  app.set('engine', 'jade');

  // Default view extension
  app.set('extension', 'jade');

  /*----------------------------------------------------------------------------
    Development settings
   ---------------------------------------------------------------------------*/

  if (app.get('env') === 'development') {
    // Add development-specific settings here
  }

  /*----------------------------------------------------------------------------
    Production settings
   ---------------------------------------------------------------------------*/

  if (app.get('env') === 'production') {
    // Add production-specific settings here
  }
}
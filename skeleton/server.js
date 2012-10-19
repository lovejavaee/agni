var settings = require('./app/config/server');

var daemonize = settings.daemonize;

if(daemonize) {
  
  var forever = require('forever');
  var daemonOptions = {
    outFile: './log/output.txt',
    errFile: './log/error.txt'
  }
  forever.startDaemon('./lib/agni.js', daemonOptions);
} else {
  
  require('./lib/agni.js');
}
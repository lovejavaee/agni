var forever = require('forever');
var config = require('./lib/config');

var appPath = './lib/agni.js';
var daemonOptions = {
  outFile: './log/output.txt',
  errFile: './log/error.txt'
}
var daemonize = config.get('daemonize');

if(daemonize) {
  forever.startDaemon(appPath, daemonOptions);
} else {
  require('./lib/agni.js');
}
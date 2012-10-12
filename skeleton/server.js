var forever = require('forever');
var Config = require('agni-framework').Config;
var path = require('path');

var appDir = path.join(__dirname, 'app');
var config = new Config(appDir);

var daemonOptions = {
  outFile: './log/output.txt',
  errFile: './log/error.txt'
}
var daemonize = config.get('daemonize');

if(daemonize) {
  forever.startDaemon('./lib/agni.js', daemonOptions);
} else {
  require('./lib/agni.js');
}
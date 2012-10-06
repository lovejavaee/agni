var forever = require('forever');

var appPath = './lib/agni.js';
var options = {
  outFile: './log/output.txt',
  errFile: './log/error.txt'
}

forever.startDaemon(appPath, options);
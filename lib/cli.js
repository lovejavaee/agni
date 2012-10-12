var fs = require('fs');
var path = require('path');
var cpr = require('cpr').cpr;

exports.create = function(name, where) {
  var starter = path.join(__dirname, '../skeleton');
  var destination = path.join(where, name);
  
  cpr(starter, destination, function(err, files) {
    if(err) {
      console.error(err);
      return false;
    }
    var msg = 'Created application skeleton. \n';
    msg += 'Now go to the newly created directory and run \'npm install\'.';
    console.log(msg);
  });
}
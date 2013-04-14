var fs = require('fs');
var path = require('path');
var cpr = require('cpr').cpr;

exports.create = function(name, where) {
  var starter = path.join(__dirname, '../skeleton');
  var destination = path.join(where, name);

  function createDirs(dirs) {
    dirs.forEach(function(dir) {
      fs.mkdirSync(path.join(destination, dir));
    });
  }

  cpr(starter, destination, function(err, files) {
    if (err) {
      console.error(err);
      return false;
    }

    createDirs([
        'app/models', 'app/libraries', 'app/public/js', 'app/public/img', 'log'
    ]);

    var msg = 'Created application skeleton. \n';
    msg += 'Now go to the newly created directory and run \'npm install\'.';
    console.log(msg);
  });
}
/**
 * Left trim slash
 * 
 * @api public
 */

exports.ltrimSlash = function(string) {
  if(string[0] === '/') {
    return string.substr(1);
  } else {
    return string;
  }
}

/**
 * Right trim slash
 * 
 * @api public
 */

exports.rtrimSlash = function(string) {
  if(string[(string.length - 1)] === '/') {
    return string.substr(0, (string.length - 1));
  } else {
    return string;
  }
}

/**
 * Adds final slash if not present
 * 
 * @api public
 */

exports.addSlash = function(string) {
  if(string[(string.length - 1)] !== '/') {
    return string + '/';
  } else {
    return string;
  }
}
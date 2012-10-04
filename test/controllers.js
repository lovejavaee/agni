/**
 * Controller tests
 */

var assert = require('assert');
var controllers = require('../lib/controllers');

describe('Controllers', function() {
  describe('#buildList()', function() {
    it('should build list correctly', function(done) {
      controllers.setDir('./test/testdir');
      controllers.buildList(function(list) {
        
        var dirfile = {          
          method: 'method',
          method2: 'method2'
        }
        
        var dir2dir3file3 = {
          nil: 'nil',
          method4: 'method4'
        }
        
        assert.deepEqual(list['/dir/file'], dirfile);
        assert.deepEqual(list['/dir2/dir3/file3'], dir2dir3file3);
        
        done();
      });
    });
  });
});
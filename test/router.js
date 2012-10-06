/**
 * Router tests
 */

var assert = require('assert');
var sinon = require('sinon');
var config = require('../lib/config');
var Controller = require('../lib/controller');
var Router = require('../lib/router');
var util = require('util');

var context = {}
context.config = sinon.stub(config);
context.controllers = {
  controllers: {},
  get: function(item) {
    if(context.controllers.controllers.hasOwnProperty(item)) {
      return context.controllers.controllers[item];
    } else {
      return false;
    }
  }
};

var req = {}

var res = {
  status: function() {
    return {
      send: function() {}
    }
  },
  render: function() {}
}

context.config.get.returns('home');

describe('Router', function() {
  describe('#routeTo', function() {
    context.controllers.controllers = {
      '/home': {
        nil: function() {},
        foo: function() {},
        baz: function(arg1, arg2) {}
      },
      '/foo/foo2': {
        bar: function() {}
      }
    }
    
    it('should call /home.foo()', function(done) {
      req.url = '/home/foo';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'foo');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.called);
        spy.restore();
        done();
      });
    });
    
    it('should call /foo/foo2.bar()', function(done) {
      req.url = '/foo/foo2/bar';
      var spy = sinon.spy(context.controllers.controllers['/foo/foo2'], 'bar');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.called);
        spy.restore();
        done();
      });
    });
    
    it('should call /home.nil()', function(done) {
      req.url = '/home';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'nil');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.called);
        spy.restore();
        done();
      });
    });
    
    it('should call /home.nil() as default', function(done) {
      req.url = '/';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'nil');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.called);
        spy.restore();
        done();
      });
    });
    
    it('should pass false if controller does not exist', function(done) {
      req.url = '/fsdf/hgd';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'nil');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.equal(spy.called, false);
        assert.strictEqual(found, false);
        spy.restore();
        done();
      });
    })
    
    it('should call /home.foo() with 2 arguments', function(done) {
      req.url = '/home/foo/x/y';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'foo');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.calledWithExactly('x', 'y'));
        spy.restore();
        done();
      });
    });
    
    it('should call /home.foo() with 3 arguments', function(done) {
      req.url = '/home/foo/x/y/z';
      var spy = sinon.spy(context.controllers.controllers['/home'], 'foo');
      
      var router = new Router(req, res, context);
      router.route(function(err, found) {
        assert.ok(spy.calledWithExactly('x', 'y', 'z'));
        spy.restore();
        done();
      });
    });
  });
});
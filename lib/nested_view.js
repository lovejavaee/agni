/**
 * NestedView constructor
 */

function NestedView(res, child, locals) {
  this.child = child;
  this.locals = locals;
  this.parent = 'layout';
  this.name = 'content';
  this.res = res;
}

/**
 * Set child variable name
 */

NestedView.prototype.as = function(name) {
  this.name = name;
  return this;
}

/**
 * Set layout name
 */

NestedView.prototype.within = function(parent) {
  this.parent = parent;
  return this;
}

/**
 * Render
 */

NestedView.prototype.render = function() {
  var self = this;
  
  //Render child
  this.res.render(this.child, this.locals, function(err, html) {
    if(err) throw err;
    
    //Parent locals
    var locals = {}
    locals[self.name] = html;
    
    //Render parent
    self.res.render(self.parent, locals);
  });
}

module.exports = NestedView;
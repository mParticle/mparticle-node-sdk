/**
 * mParticle
 * mParticle Event API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: support@mparticle.com
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/mparticle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/mparticle'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.mParticle);
  }
}(this, function(expect, mParticle) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new mParticle.OptOutEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OptOutEvent', function() {
    it('should create an instance of OptOutEvent', function() {
      var instance = new mParticle.OptOutEvent();
      expect(instance).to.be.a(mParticle.OptOutEvent);
    });

    it('should have the property isOptedOut (base name: "is_opted_out")', function() {
      var instance = new mParticle.OptOutEvent(true);
      expect(instance.is_opted_out).to.be(true);
    });

    it('should have the event type opt_out', function() {
      var instance = new mParticle.OptOutEvent();
      expect(instance.getEventType()).to.be('opt_out');
    });

  });

}));

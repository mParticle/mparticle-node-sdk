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
})(this, function(expect, mParticle) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new mParticle.CommerceEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') return object[getter]();
    else return object[property];
  };

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') object[setter](value);
    else object[property] = value;
  };

  describe('CommerceEvent', function() {
    it('should create an instance of CommerceEvent', function() {
      var instance = new mParticle.CommerceEvent();
      expect(instance).to.be.a(mParticle.CommerceEvent);
    });

    it('should have the event type commerce', function() {
      var instance = new mParticle.CommerceEvent();
      expect(instance.getEventType()).to.be('commerce_event');
    });

    it('should have the property customFlags', function() {
      var instance = new mParticle.CommerceEvent();
      instance.custom_flags = {
        foo: 'bar',
        answer: 42,
        arrays: ['foo', 'bar', 'baz']
      };
      expect(instance).to.be.a(mParticle.CommerceEvent);
      expect(instance.custom_flags.foo).to.be('bar');
      expect(instance.custom_flags.answer).to.be(42);
      expect(instance.custom_flags.arrays).to.eql(['foo', 'bar', 'baz']);
    });
  });
});

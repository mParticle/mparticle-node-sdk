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
    instance = new mParticle.ScreenViewEvent();
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

  describe('ScreenViewEvent', function() {
    it('should create an instance of ScreenViewEvent', function() {
      var instance = new mParticle.ScreenViewEvent();
      expect(instance).to.be.a(mParticle.ScreenViewEvent);
    });

    it('should have the property screenName (base name: "screen_name")', function() {
      var instance = new mParticle.ScreenViewEvent('screen_name');
      expect(instance.screen_name).to.be('screen_name');
    });

    it('should have the event type screen_view', function() {
      var instance = new mParticle.ScreenViewEvent();
      expect(instance.getEventType()).to.be('screen_view');
    });

    it('should have the property customFlags', function() {
      var instance = new mParticle.ScreenViewEvent();
      instance.custom_flags = {
        foo: 'bar',
        answer: 42,
        arrays: ['foo', 'bar', 'baz']
      };
      expect(instance).to.be.a(mParticle.ScreenViewEvent);
      expect(instance.custom_flags.foo).to.be('bar');
      expect(instance.custom_flags.answer).to.be(42);
      expect(instance.custom_flags.arrays).to.eql(['foo', 'bar', 'baz']);
    });
  });
});

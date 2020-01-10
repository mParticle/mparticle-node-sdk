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
    instance = new mParticle.AppEvent();
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

  describe('AppEvent', function() {
    it('should create an instance of AppEvent', function() {
      var instance = new mParticle.AppEvent();
      expect(instance).to.be.a(mParticle.AppEvent);
    });

    it('should have the property customEventType (base name: "custom_event_type")', function() {
      var instance = new mParticle.AppEvent(
        mParticle.AppEvent.CustomEventType.unknown
      );
      expect(instance).to.be.a(mParticle.AppEvent);
      expect(instance.custom_event_type).to.be('unknown');
    });

    it('should have the property eventName (base name: "event_name")', function() {
      var instance = new mParticle.AppEvent(null, 'test event');
      expect(instance).to.be.a(mParticle.AppEvent);
      expect(instance.event_name).to.be('test event');
    });

    it('should have the property customFlags', function() {
      var instance = new mParticle.AppEvent();
      instance.custom_flags = {
        foo: 'bar',
        answer: 42,
        arrays: ['foo', 'bar', 'baz']
      };
      expect(instance).to.be.a(mParticle.AppEvent);
      expect(instance.custom_flags.foo).to.be('bar');
      expect(instance.custom_flags.answer).to.be(42);
      expect(instance.custom_flags.arrays).to.eql(['foo', 'bar', 'baz']);
    });
  });
});

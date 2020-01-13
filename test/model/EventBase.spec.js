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
    instance = new mParticle.EventBase();
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

  describe('EventBase', function() {
    it('should create an instance of EventBase', function() {
      var instance = new mParticle.EventBase();
      expect(instance).to.be.a(mParticle.EventBase);
    });

    it('should have the property data (base name: "data")', function() {
      var eventData = new mParticle.EventData();
      var instance = new mParticle.EventBase(eventData);
      expect(instance.data).to.be(eventData);
    });

    it('should have the property eventType (base name: "event_type")', function() {
      var instance = new mParticle.EventBase(null, mParticle.EventBase.EventType.session_start);
      expect(instance.event_type).to.be('session_start');
    });

  });

}));

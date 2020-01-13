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
    instance = new mParticle.ApplicationStateTransitionEvent();
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

  describe('ApplicationStateTransitionEvent', function() {
    it('should create an instance of ApplicationStateTransitionEvent', function() {
      var instance = new mParticle.ApplicationStateTransitionEvent();
      expect(instance).to.be.a(mParticle.ApplicationStateTransitionEvent);
    });

    it('should have the property applicationTransitionType (base name: "application_transition_type")', function() {
      var instance = new mParticle.ApplicationStateTransitionEvent(mParticle.ApplicationStateTransitionEvent.ApplicationTransitionType.application_initialized);
      expect(instance.application_transition_type).to.be('application_initialized');
    });

    it('should have the event type application_state_transition', function() {
      var instance = new mParticle.ApplicationStateTransitionEvent('application transition type');
      expect(instance.getEventType()).to.be('application_state_transition');
    });

  });

}));

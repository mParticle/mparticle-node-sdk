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
    instance = new mParticle.ProfileEvent();
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

  describe('ProfileEvent', function() {
    it('should create an instance of ProfileEvent', function() {
      var instance = new mParticle.ProfileEvent();
      expect(instance).to.be.a(mParticle.ProfileEvent);
    });

    it('should have the property profileName (base name: "profile_name")', function() {
      var instance = new mParticle.ProfileEvent('profile_name');
      expect(instance.profile_name).to.be('profile_name');
    });

    it('should have the property previousProfileName (base name: "previous_profile_name")', function() {
      var instance = new mParticle.ProfileEvent(null, 'previous_profile_name');
      expect(instance.previous_profile_name).to.be('previous_profile_name');
    });

    it('should have the property profileEventType (base name: "profile_event_type")', function() {
      var instance = new mParticle.ProfileEvent(null, null, 'profile_event_type');
      expect(instance.profile_event_type).to.be('profile_event_type');
    });

    it('should have the event type application_state_transition', function() {
      var instance = new mParticle.ApplicationStateTransitionEvent('application transition type');
      expect(instance.getEventType()).to.be('application_state_transition');
    });

  });

}));

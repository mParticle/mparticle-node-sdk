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
    instance = new mParticle.PushRegistrationEvent();
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

  describe('PushRegistrationEvent', function() {
    it('should create an instance of PushRegistrationEvent', function() {
      var instance = new mParticle.PushRegistrationEvent();
      expect(instance).to.be.a(mParticle.PushRegistrationEvent);
    });

    it('should have the property register (base name: "register")', function() {
      var instance = new mParticle.PushRegistrationEvent(true);
      expect(instance.register).to.be(true);
    });

    it('should have the property registrationToken (base name: "registration_token")', function() {
      var instance = new mParticle.PushRegistrationEvent(null, 'registration_token');
      expect(instance.registration_token).to.be('registration_token');
    });

    it('should have the event type push_registration', function() {
      var instance = new mParticle.PushRegistrationEvent();
      expect(instance.getEventType()).to.be('push_registration');
    });

  });

}));

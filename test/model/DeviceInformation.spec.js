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
    instance = new mParticle.DeviceInformation();
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

  describe('DeviceInformation', function() {
    it('should create an instance of DeviceInformation', function() {
      var instance = new mParticle.DeviceInformation();
      expect(instance).to.be.a(mParticle.DeviceInformation);
    });


    it('should have the property attAuthorizationStatus (base name: "att_authorization_status")', function() {
      var attStatus = mParticle.DeviceInformation.ATTAuthorizationStatus.authorized;
      var instance = new mParticle.DeviceInformation();
      instance.att_authorization_status = attStatus;
      expect(instance.att_authorization_status).to.be(attStatus);
    });

    it('should have the property attTimestampUnixtimeMS (base name: "att_timestamp_unixtime_ms")', function() {
      var attTimestamp = 1552679728376;
      var instance = new mParticle.DeviceInformation();
      instance.att_timestamp_unixtime_ms = attTimestamp;
      expect(instance.att_timestamp_unixtime_ms).to.be(attTimestamp);
    });

  });

}));

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
    instance = new mParticle.GeoLocation();
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

  describe('GeoLocation', function() {
    it('should create an instance of GeoLocation', function() {
      var instance = new mParticle.GeoLocation();
      expect(instance).to.be.a(mParticle.GeoLocation);
    });

    it('should have the property latitude (base name: "latitude")', function() {
      var instance = new mParticle.GeoLocation(100);
      expect(instance.latitude).to.be(100);
    });

    it('should have the property longitude (base name: "longitude")', function() {
      var instance = new mParticle.GeoLocation(null, 200);
      expect(instance.longitude).to.be(200);
    });

  });

}));

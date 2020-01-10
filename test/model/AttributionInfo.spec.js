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
    instance = new mParticle.AttributionInfo();
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

  describe('AttributionInfo', function() {
    it('should create an instance of AttributionInfo', function() {
      var instance = new mParticle.AttributionInfo();
      expect(instance).to.be.a(mParticle.AttributionInfo);
    });

    it('should have the property serviceProvider (base name: "service_provider")', function() {
      var instance = new mParticle.AttributionInfo('service provider');
      expect(instance.service_provider).to.be('service provider');
    });

    it('should have the property publisher (base name: "publisher")', function() {
      var instance = new mParticle.AttributionInfo(null, 'publisher');
      expect(instance.publisher).to.be('publisher');
    });

    it('should have the property campaign (base name: "campaign")', function() {
      var instance = new mParticle.AttributionInfo(null, null, 'campaign');
      expect(instance.campaign).to.be('campaign');
    });

  });

}));

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
    instance = new mParticle.Batch();
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

  describe('Batch', function() {
    it('should create an instance of Batch', function() {
      var instance = new mParticle.Batch();
      expect(instance).to.be.a(mParticle.Batch);
    });

    it('should have the property environment (base name: "environment")', function() {
      var instance = new mParticle.Batch(mParticle.Batch.Environment.production);
      expect(instance.environment).to.be('production');
    });

    it('should have the property mpid', function() {
      var instance = new mParticle.Batch(mParticle.Batch.Environment.production);
      instance.mpid = 600868121729048600
      expect(instance.mpid).to.be(600868121729048600);
    });

    it('should have the property mp_deviceid', function() {
      var instance = new mParticle.Batch(mParticle.Batch.Environment.production);
      instance.mp_deviceid = "59780f39-d7a0-4ebe-9950-280f937c29e2"
      expect(instance.mp_deviceid).to.be("59780f39-d7a0-4ebe-9950-280f937c29e2");
    });

    it('should have the property context', function() {
      var instance = new mParticle.Batch(mParticle.Batch.Environment.production);
      var testContext = new mParticle.BatchContext();
      instance.context = testContext
      expect(instance.context).to.be(testContext);
    });

  });

}));

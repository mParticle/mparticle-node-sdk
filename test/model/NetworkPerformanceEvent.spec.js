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
    instance = new mParticle.NetworkPerformanceEvent();
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

  describe('NetworkPerformanceEvent', function() {
    it('should create an instance of NetworkPerformanceEvent', function() {
      var instance = new mParticle.NetworkPerformanceEvent();
      expect(instance).to.be.a(mParticle.NetworkPerformanceEvent);
    });

    it('should have the property http_verb (base name: "http_verb")', function() {
      var instance = new mParticle.NetworkPerformanceEvent('http_verb');
      expect(instance.http_verb).to.be('http_verb');
    });

    it('should have the property url (base name: "url")', function() {
      var instance = new mParticle.NetworkPerformanceEvent(null, 'url');
      expect(instance.url).to.be('url');
    });

    it('should have the property time_elapsed (base name: "time_elapsed")', function() {
      var instance = new mParticle.NetworkPerformanceEvent(null, null, 10);
      expect(instance.time_elapsed).to.be(10);
    });

    it('should have the property bytes_in (base name: "bytes_in")', function() {
      var instance = new mParticle.NetworkPerformanceEvent(null, null, null, 3);
      expect(instance.bytes_in).to.be(3);
    });

    it('should have the property bytes_out (base name: "bytes_out")', function() {
      var instance = new mParticle.NetworkPerformanceEvent(null, null, null, null, 1);
      expect(instance.bytes_out).to.be(1);
    });

    it('should have the property response_code (base name: "response_code")', function() {
      var instance = new mParticle.NetworkPerformanceEvent(null, null, null, null, null, 400);
      expect(instance.response_code).to.be(400);
    });

    it('should have the event type network_performance', function() {
      var instance = new mParticle.NetworkPerformanceEvent();
      expect(instance.getEventType()).to.be('network_performance');
    });

  });

}));

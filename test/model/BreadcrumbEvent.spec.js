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
    instance = new mParticle.BreadcrumbEvent();
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

  describe('BreadcrumbEvent', function() {
    it('should create an instance of BreadcrumbEvent', function() {
      var instance = new mParticle.BreadcrumbEvent();
      expect(instance).to.be.a(mParticle.BreadcrumbEvent);
    });

     it('should have the property session_number (base name: "session_number")', function() {
      var instance = new mParticle.BreadcrumbEvent(10);
      expect(instance.session_number).to.be(10);
    });

     it('should have the property label (base name: "label")', function() {
      var instance = new mParticle.BreadcrumbEvent(null, 'label');
      expect(instance.label).to.be('label');
    });

    it('should have the event type breadcrumb', function() {
      var instance = new mParticle.BreadcrumbEvent();
      expect(instance.getEventType()).to.be('breadcrumb');
    });

  });

}));

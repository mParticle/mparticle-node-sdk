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
    instance = new mParticle.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      var instance = new mParticle.Product();
      expect(instance).to.be.a(mParticle.Product);
    });

    it('should have the property id (base name: "id")', function() {
      var instance = new mParticle.Product('id');
      expect(instance.id).to.be('id');
    });

    it('should have the property name (base name: "name")', function() {
      var instance = new mParticle.Product(null, 'name');
      expect(instance.name).to.be('name');
    });

    it('should have the property price (base name: "price")', function() {
      var instance = new mParticle.Product(null, null, 100.59);
      expect(instance.price).to.be(100.59);
    });

    it('should have the property totalProductAmount (base name: "total_product_amount")', function() {
      var instance = new mParticle.Product(null, null, null, 40.10);
      expect(instance.total_product_amount).to.be(40.10);
    });

  });

}));

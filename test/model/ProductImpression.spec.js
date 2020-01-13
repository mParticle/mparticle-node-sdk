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
    instance = new mParticle.ProductImpression();
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

  describe('ProductImpression', function() {
    it('should create an instance of ProductImpression', function() {
      var instance = new mParticle.ProductImpression();
      expect(instance).to.be.a(mParticle.ProductImpression);
    });

    it('should have the property productImpressionList (base name: "product_impression_list")', function() {
      var instance = new mParticle.ProductImpression('product_impression_list');
      expect(instance.product_impression_list).to.be('product_impression_list');
    });

    it('should have the property products (base name: "products")', function() {
      var instance = new mParticle.ProductImpression(null, 'products');
      expect(instance.products).to.be('products');
    });

  });

}));

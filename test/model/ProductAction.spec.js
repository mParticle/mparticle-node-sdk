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
    instance = new mParticle.ProductAction();
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

  describe('ProductAction', function() {
    it('should create an instance of ProductAction', function() {
      var instance = new mParticle.ProductAction();
      expect(instance).to.be.a(mParticle.ProductAction);
    });

    it('should have the property action (base name: "action")', function() {
      var instance = new mParticle.ProductAction('action');
      expect(instance.action).to.be('action');
    });

    it('should have the property transactionId (base name: "transaction_id")', function() {
      var instance = new mParticle.ProductAction(null, 'transaction_id');
      expect(instance.transaction_id).to.be('transaction_id');
    });

    it('should have the property totalAmount (base name: "total_amount")', function() {
      var instance = new mParticle.ProductAction(null, null, 100.40);
      expect(instance.total_amount).to.be(100.40);
    });

    it('should have the property products (base name: "products")', function() {
      var instance = new mParticle.ProductAction(null, null, null, 'products');
      expect(instance.products).to.be('products');
    });

  });

}));

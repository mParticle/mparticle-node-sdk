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
    instance = new mParticle.PromotionAction();
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

  describe('PromotionAction', function() {
    it('should create an instance of PromotionAction', function() {
      var instance = new mParticle.PromotionAction();
      expect(instance).to.be.a(mParticle.PromotionAction);
    });

    it('should have the property action (base name: "action")', function() {
      var instance = new mParticle.PromotionAction(mParticle.PromotionAction.Action.view);
      expect(instance.action).to.be(mParticle.PromotionAction.Action.view);
    });

    it('should have the property promotions (base name: "promotions")', function() {
      var promotions = [
        new mParticle.Promotion()
      ];
      var instance = new mParticle.PromotionAction(null, promotions);
      expect(instance.promotions).to.be(promotions);
    });

  });

}));

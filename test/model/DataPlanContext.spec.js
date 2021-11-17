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
      instance = new mParticle.DataPlanContext();
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
  
    describe('DataPlanContext', function() {
      it('should create an instance of DataPlanContext', function() {
        var instance = new mParticle.DataPlanContext();
        expect(instance).to.be.a(mParticle.DataPlanContext);
      });
  
  
      it('should have the property plan_id', function() {
        var instance = new mParticle.DataPlanContext();
        instance.plan_id = "59780f39-d7a0-4ebe-9950-280f937c29e2";
        expect(instance.plan_id).to.be("59780f39-d7a0-4ebe-9950-280f937c29e2");
      });

      it('should have the property plan_version', function() {
        var instance = new mParticle.DataPlanContext();
        instance.plan_version = 2
        expect(instance.plan_version).to.be(2);
      });
  
    });
  
  }));
  
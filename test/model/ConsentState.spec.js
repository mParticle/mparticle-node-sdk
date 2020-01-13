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
})(this, function(expect, mParticle) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new mParticle.ConsentState();
  });

  describe('ConsentState', function() {
    it('should create an instance of ConsentState', function() {
      var instance = new mParticle.ConsentState();
      expect(instance).to.be.a(mParticle.ConsentState);
    });

    it('should have the property gdpr (base name: "gdpr")', function() {
      var instance = new mParticle.ConsentState();

      expect(instance.gdpr).to.eql({});
    });
  });
});

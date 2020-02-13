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
    instance = new mParticle.CCPAConsentState();
  });

  describe('CCPAConsentState', function() {
    it('should create an instance of CCPAConsentState', function() {
      var instance = new mParticle.CCPAConsentState();
      expect(instance).to.be.a(mParticle.CCPAConsentState);
    });

    it('should have the property consented (base name: "consented")', function() {
      var instance = new mParticle.CCPAConsentState(true);
      expect(instance.consented).to.be(true);
    });

    it('should have the property timestamp_unixtime_ms {base name: "timestamp_unixtime_ms" }', function() {
      var now = Date.now();
      var instance = new mParticle.CCPAConsentState(null, now);
      expect(instance.timestamp_unixtime_ms).to.be(now);
    });

    it('should have the property location {base name: "location" }', function() {
      var instance = new mParticle.CCPAConsentState(
        null,
        null,
        'dtmgbank.com/signup'
      );
      expect(instance.location).to.be('dtmgbank.com/signup');
    });

    it('should have the property hardware_id {base name: "hardware_id" }', function() {
      var instance = new mParticle.CCPAConsentState(
        null,
        null,
        null,
        'IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702'
      );

      expect(instance.hardware_id).to.be(
        'IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702'
      );
    });
  });
});

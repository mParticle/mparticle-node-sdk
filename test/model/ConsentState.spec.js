/**
 * mParticle
 * mParticle Event API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: support@mparticle.com
 *
 */

// TODO: Rename to ConsentState

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/mParticle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/mParticle'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.mParticle);
  }
})(this, function(expect, mParticle) {
  'use strict';

  var instance;

  beforeEach(function() {
    // console.log('mp', mParticle);
    // console.log('consent', mParticle.ConsentState);
    instance = new mParticle.ConsentState();
    console.log('instance', instance);
    console.log('instance.document', instance.document);
    console.log('instance.document type', typeof instance.document);
  });

  describe.only('ConsentState', function() {
    // TODO: Should we expect an instance of ConsentState to be of type GDPR?
    it('should create an instance of ConsentState', function() {
      var instance = new mParticle.ConsentState('document');
      expect(instance).to.be.a(mParticle.ConsentState);
    });

    it('should have the property regulation (base name: "regulation")', function() {
      var instance = new mParticle.ConsentState('GDPR');
      expect(instance.regulation).to.be('GDPR');
    });

    it('should have the property document (base name: "document")', function() {
      var instance = new mParticle.ConsentState(null, 'document_agreement.v2');
      expect(instance.document).to.be('document_agreement.v2');
    });

    it('should have the property consented (base name: "consented")', function() {
      var instance = new mParticle.ConsentState(null, null, true);
      expect(instance.consented).to.be(true);
    });

    it('should have the property timestamp_unixtime_ms {base name: "timestamp_unixtime_ms" }', function() {
      var now = Date.now();
      var instance = new mParticle.ConsentState(null, null, null, now);
      expect(instance.timestamp_unixtime_ms).to.be(now);
    });

    it('should have the property location {base name: "location" }', function() {
      var instance = new mParticle.ConsentState(
        null,
        null,
        null,
        null,
        'dtmgbank.com/signup'
      );
      expect(instance.location).to.be('dtmgbank.com/signup');
    });

    it('should have the property hardware_id {base name: "hardware_id" }', function() {
      var instance = new mParticle.ConsentState(
        null,
        null,
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

// regulation?: string;
// document?: string;
// consented: boolean;
// timestamp_unixtime_ms?: number;
// location?: string;
// hardware_id?: string;

// "consent_state": {
//   "gdpr": {
//     "location_collection": {
//       "document": "location_collection_agreement.v43",
//       "consented": true,
//       "timestamp_unixtime_ms": 1523039002083,
//       "location": "dtmgbank.com/signup",
//       "hardware_id": "IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702"
//     },
//     "parental": {
//       "document": "standard_parental_consent.v2",
//       "consented": true,
//       "timestamp_unixtime_ms": 1523039002083,
//       "location": "dtmgbank.com/signup",
//       "hardware_id": "IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702"
//     }
//   }
// }

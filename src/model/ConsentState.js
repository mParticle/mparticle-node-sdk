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
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.ConsentState = factory();
  }
})(this, function() {
  'use strict';

  /**
   * The ConsentState model module
   * @module modelConsentState/
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ConsentState</code>.
   * @alias module:model/ConsentState
   * @class
   * @param name {String}
   * @param consent_state_object {Object}
   */
  var exports = function() {
    var _this = this;

    _this['gdpr'] = {};
    _this['ccpa'] = {};
  };

  /**
   * Constructs a <code>ConsentState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConsentState} obj Optional instance to populate.
   * @return {module:model/ConsentState} The populated <code>ConsentState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  };

  /**
   * @member {Object} gdpr
   */
  exports.prototype['gdpr'] = undefined;

  /**
   * @member {Object} ccpa
   */
  exports.prototype['ccpa'] = undefined;

  return exports;
});

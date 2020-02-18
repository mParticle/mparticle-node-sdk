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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.CCPAConsentState = factory(root.mParticle.ApiClient);
  }
})(this, function(ApiClient) {
  'use strict';

  /**
   * The CCPAConsentState model module
   * @module model/CCPAConsentState
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CCPAConsentState</code>.
   * @alias module:model/CCPAConsentState
   * @class
   * @param document {String}
   * @param consented {Boolean}
   * @param timestamp_unixtime_ms {Number}
   * @param location {String}
   * @param hardware_id {String}
   */
  var exports = function(
    document,
    consented,
    timestamp_unixtime_ms,
    location,
    hardware_id
  ) {
    var _this = this;
    _this['document'] = document;
    _this['consented'] = consented;
    _this['timestamp_unixtime_ms'] = timestamp_unixtime_ms;
    _this['location'] = location;
    _this['hardware_id'] = hardware_id;
  };

  /**
   * Constructs a <code>CCPAConsentState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CCPAConsentState} obj Optional instance to populate.
   * @return {module:model/CCPAConsentState} The populated <code>CCPAConsentState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('document')) {
        obj['document'] = ApiClient.convertToType(data['document'], 'String');
      }

      if (data.hasOwnProperty('consented')) {
        obj['consented'] = ApiClient.convertToType(
          data['consented'],
          'Boolean'
        );
      }

      if (data.hasOwnProperty('timestamp_unixtime_ms')) {
        obj['timestamp_unixtime_ms'] = ApiClient.convertToType(
          data['timestamp_unixtime_ms'],
          'Number'
        );
      }

      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }

      if (data.hasOwnProperty('hardware_id')) {
        obj['hardware_id'] = ApiClient.convertToType(
          data['hardware_id'],
          'String'
        );
      }
    }
    return obj;
  };

  /**
   * @member {String} document
   */
  exports.prototype['document'] = undefined;

  /**
   * @member {Boolean} consented
   */
  exports.prototype['consented'] = undefined;

  /**
   * @member {Number} timestamp_unixtime_ms
   */
  exports.prototype['timestamp_unixtime_ms'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {String} hardware_id
   */
  exports.prototype['hardware_id'] = undefined;

  return exports;
});

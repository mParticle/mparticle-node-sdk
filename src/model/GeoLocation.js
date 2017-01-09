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
    root.mParticle.GeoLocation = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GeoLocation model module.
   * @module model/GeoLocation
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>GeoLocation</code>.
   * @alias module:model/GeoLocation
   * @class
   * @param latitude {Number}
   * @param longitude {Number}
   */
  var exports = function(latitude, longitude) {
    var _this = this;

    _this['latitude'] = latitude;
    _this['longitude'] = longitude;

  };

  /**
   * Constructs a <code>GeoLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoLocation} obj Optional instance to populate.
   * @return {module:model/GeoLocation} The populated <code>GeoLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('accuracy')) {
        obj['accuracy'] = ApiClient.convertToType(data['accuracy'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {Number} accuracy
   */
  exports.prototype['accuracy'] = undefined;



  return exports;
}));



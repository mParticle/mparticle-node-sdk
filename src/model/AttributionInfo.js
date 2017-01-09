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
    root.mParticle.AttributionInfo = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AttributionInfo model module.
   * @module model/AttributionInfo
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>AttributionInfo</code>.
   * @alias module:model/AttributionInfo
   * @class
   * @param serviceProvider {String}
   * @param publisher {String}
   * @param campaign {String}
   */
  var exports = function(serviceProvider, publisher, campaign) {
    var _this = this;

    _this['service_provider'] = serviceProvider;
    _this['publisher'] = publisher;
    _this['campaign'] = campaign;
  };

  /**
   * Constructs a <code>AttributionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AttributionInfo} obj Optional instance to populate.
   * @return {module:model/AttributionInfo} The populated <code>AttributionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('service_provider')) {
        obj['service_provider'] = ApiClient.convertToType(data['service_provider'], 'String');
      }
      if (data.hasOwnProperty('publisher')) {
        obj['publisher'] = ApiClient.convertToType(data['publisher'], 'String');
      }
      if (data.hasOwnProperty('campaign')) {
        obj['campaign'] = ApiClient.convertToType(data['campaign'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} service_provider
   */
  exports.prototype['service_provider'] = undefined;
  /**
   * @member {String} publisher
   */
  exports.prototype['publisher'] = undefined;
  /**
   * @member {String} campaign
   */
  exports.prototype['campaign'] = undefined;



  return exports;
}));



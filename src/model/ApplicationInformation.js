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
    root.mParticle.ApplicationInformation = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ApplicationInformation model module.
   * @module model/ApplicationInformation
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ApplicationInformation</code>.
   * @alias module:model/ApplicationInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ApplicationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationInformation} obj Optional instance to populate.
   * @return {module:model/ApplicationInformation} The populated <code>ApplicationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('application_name')) {
        obj['application_name'] = ApiClient.convertToType(data['application_name'], 'String');
      }
      if (data.hasOwnProperty('application_version')) {
        obj['application_version'] = ApiClient.convertToType(data['application_version'], 'String');
      }
      if (data.hasOwnProperty('install_referrer')) {
        obj['install_referrer'] = ApiClient.convertToType(data['install_referrer'], 'String');
      }
      if (data.hasOwnProperty('package')) {
        obj['package'] = ApiClient.convertToType(data['package'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} application_name
   */
  exports.prototype['application_name'] = undefined;
  /**
   * @member {String} application_version
   */
  exports.prototype['application_version'] = undefined;
  /**
   * @member {String} install_referrer
   */
  exports.prototype['install_referrer'] = undefined;
  /**
   * @member {String} package
   */
  exports.prototype['package'] = undefined;



  return exports;
}));



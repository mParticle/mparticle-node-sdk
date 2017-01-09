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
    define(['ApiClient', 'model/ApiResponseErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApiResponseErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.ApiResponse = factory(root.mParticle.ApiClient, root.mParticle.ApiResponseErrors);
  }
}(this, function(ApiClient, ApiResponseErrors) {
  'use strict';




  /**
   * The ApiResponse model module.
   * @module model/ApiResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ApiResponse</code>.
   * @alias module:model/ApiResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponse} obj Optional instance to populate.
   * @return {module:model/ApiResponse} The populated <code>ApiResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
        obj['errors'] = ApiClient.convertToType(data['errors'], [ApiResponseErrors]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ApiResponseErrors>} errors
   */
  exports.prototype['errors'] = undefined;



  return exports;
}));



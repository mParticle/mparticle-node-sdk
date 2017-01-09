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
    root.mParticle.SourceInformation = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SourceInformation model module.
   * @module model/SourceInformation
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>SourceInformation</code>.
   * @alias module:model/SourceInformation
   * @class
   * @param channel {module:model/SourceInformation.Channel}
   * @param partner {String}
   */
  var exports = function(channel, partner) {
    var _this = this;

    _this['channel'] = channel;
    _this['partner'] = partner;


  };

  /**
   * Constructs a <code>SourceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SourceInformation} obj Optional instance to populate.
   * @return {module:model/SourceInformation} The populated <code>SourceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('partner')) {
        obj['partner'] = ApiClient.convertToType(data['partner'], 'String');
      }
      if (data.hasOwnProperty('replay_request_id')) {
        obj['replay_request_id'] = ApiClient.convertToType(data['replay_request_id'], 'String');
      }
      if (data.hasOwnProperty('replay_job_id')) {
        obj['replay_job_id'] = ApiClient.convertToType(data['replay_job_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SourceInformation.Channel} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * @member {String} partner
   */
  exports.prototype['partner'] = undefined;
  /**
   * @member {String} replay_request_id
   */
  exports.prototype['replay_request_id'] = undefined;
  /**
   * @member {String} replay_job_id
   */
  exports.prototype['replay_job_id'] = undefined;


  /**
   * Allowed values for the <code>channel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Channel = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "native"
     * @const
     */
    "native": "native",
    /**
     * value: "javascript"
     * @const
     */
    "javascript": "javascript",
    /**
     * value: "pixel"
     * @const
     */
    "pixel": "pixel",
    /**
     * value: "desktop"
     * @const
     */
    "desktop": "desktop",
    /**
     * value: "partner"
     * @const
     */
    "partner": "partner",
    /**
     * value: "server_to_server"
     * @const
     */
    "server_to_server": "server_to_server",
    /**
     * value: "All"
     * @const
     */
    "All": "All"  };


  return exports;
}));



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
    root.mParticle.MediaInfo = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaInfo model module.
   * @module model/MediaInfo
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>MediaInfo</code>.
   * @alias module:model/MediaInfo
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>MediaInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaInfo} obj Optional instance to populate.
   * @return {module:model/MediaInfo} The populated <code>MediaInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
      }
      if (data.hasOwnProperty('timed_metadata')) {
        obj['timed_metadata'] = ApiClient.convertToType(data['timed_metadata'], 'String');
      }
      if (data.hasOwnProperty('playback_position')) {
        obj['playback_position'] = ApiClient.convertToType(data['playback_position'], 'Number');
      }
      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('quality')) {
        obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
      }
      if (data.hasOwnProperty('playback_rate')) {
        obj['playback_rate'] = ApiClient.convertToType(data['playback_rate'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediaInfo.Action} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {String} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * @member {String} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} timed_metadata
   */
  exports.prototype['timed_metadata'] = undefined;
  /**
   * @member {Number} playback_position
   */
  exports.prototype['playback_position'] = undefined;
  /**
   * @member {module:model/MediaInfo.Format} format
   */
  exports.prototype['format'] = undefined;
  /**
   * @member {module:model/MediaInfo.Quality} quality
   */
  exports.prototype['quality'] = undefined;
  /**
   * @member {Number} playback_rate
   */
  exports.prototype['playback_rate'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Action = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "play"
     * @const
     */
    "play": "play",
    /**
     * value: "stop"
     * @const
     */
    "stop": "stop",
    /**
     * value: "update_playback_position"
     * @const
     */
    "update_playback_position": "update_playback_position",
    /**
     * value: "skip"
     * @const
     */
    "skip": "skip",
    /**
     * value: "rate"
     * @const
     */
    "rate": "rate"  };

  /**
   * Allowed values for the <code>format</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Format = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "audio"
     * @const
     */
    "audio": "audio",
    /**
     * value: "video"
     * @const
     */
    "video": "video"  };

  /**
   * Allowed values for the <code>quality</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Quality = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "low"
     * @const
     */
    "low": "low",
    /**
     * value: "sd"
     * @const
     */
    "sd": "sd",
    /**
     * value: "medium"
     * @const
     */
    "medium": "medium",
    /**
     * value: "hd"
     * @const
     */
    "hd": "hd",
    /**
     * value: "ultra_hd"
     * @const
     */
    "ultra_hd": "ultra_hd"  };


  return exports;
}));



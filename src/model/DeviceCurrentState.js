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
    root.mParticle.DeviceCurrentState = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceCurrentState model module.
   * @module model/DeviceCurrentState
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>DeviceCurrentState</code>.
   * @alias module:model/DeviceCurrentState
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>DeviceCurrentState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceCurrentState} obj Optional instance to populate.
   * @return {module:model/DeviceCurrentState} The populated <code>DeviceCurrentState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('time_since_start_ms')) {
        obj['time_since_start_ms'] = ApiClient.convertToType(data['time_since_start_ms'], 'Number');
      }
      if (data.hasOwnProperty('battery_level')) {
        obj['battery_level'] = ApiClient.convertToType(data['battery_level'], 'Number');
      }
      if (data.hasOwnProperty('data_connection_type')) {
        obj['data_connection_type'] = ApiClient.convertToType(data['data_connection_type'], 'String');
      }
      if (data.hasOwnProperty('data_connection_type_detail')) {
        obj['data_connection_type_detail'] = ApiClient.convertToType(data['data_connection_type_detail'], 'String');
      }
      if (data.hasOwnProperty('gps_state')) {
        obj['gps_state'] = ApiClient.convertToType(data['gps_state'], 'Boolean');
      }
      if (data.hasOwnProperty('total_system_memory_usage_bytes')) {
        obj['total_system_memory_usage_bytes'] = ApiClient.convertToType(data['total_system_memory_usage_bytes'], 'Number');
      }
      if (data.hasOwnProperty('disk_space_free_bytes')) {
        obj['disk_space_free_bytes'] = ApiClient.convertToType(data['disk_space_free_bytes'], 'Number');
      }
      if (data.hasOwnProperty('cpu')) {
        obj['cpu'] = ApiClient.convertToType(data['cpu'], 'String');
      }
      if (data.hasOwnProperty('system_memory_available_bytes')) {
        obj['system_memory_available_bytes'] = ApiClient.convertToType(data['system_memory_available_bytes'], 'Number');
      }
      if (data.hasOwnProperty('system_memory_low')) {
        obj['system_memory_low'] = ApiClient.convertToType(data['system_memory_low'], 'Boolean');
      }
      if (data.hasOwnProperty('system_memory_threshold_bytes')) {
        obj['system_memory_threshold_bytes'] = ApiClient.convertToType(data['system_memory_threshold_bytes'], 'Number');
      }
      if (data.hasOwnProperty('application_memory_available_bytes')) {
        obj['application_memory_available_bytes'] = ApiClient.convertToType(data['application_memory_available_bytes'], 'Number');
      }
      if (data.hasOwnProperty('application_memory_max_bytes')) {
        obj['application_memory_max_bytes'] = ApiClient.convertToType(data['application_memory_max_bytes'], 'Number');
      }
      if (data.hasOwnProperty('application_memory_total_bytes')) {
        obj['application_memory_total_bytes'] = ApiClient.convertToType(data['application_memory_total_bytes'], 'Number');
      }
      if (data.hasOwnProperty('device_orientation')) {
        obj['device_orientation'] = ApiClient.convertToType(data['device_orientation'], 'String');
      }
      if (data.hasOwnProperty('status_bar_orientation')) {
        obj['status_bar_orientation'] = ApiClient.convertToType(data['status_bar_orientation'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} time_since_start_ms
   */
  exports.prototype['time_since_start_ms'] = undefined;
  /**
   * @member {Number} battery_level
   */
  exports.prototype['battery_level'] = undefined;
  /**
   * @member {String} data_connection_type
   */
  exports.prototype['data_connection_type'] = undefined;
  /**
   * @member {String} data_connection_type_detail
   */
  exports.prototype['data_connection_type_detail'] = undefined;
  /**
   * @member {Boolean} gps_state
   */
  exports.prototype['gps_state'] = undefined;
  /**
   * @member {Number} total_system_memory_usage_bytes
   */
  exports.prototype['total_system_memory_usage_bytes'] = undefined;
  /**
   * @member {Number} disk_space_free_bytes
   */
  exports.prototype['disk_space_free_bytes'] = undefined;
  /**
   * @member {String} cpu
   */
  exports.prototype['cpu'] = undefined;
  /**
   * @member {Number} system_memory_available_bytes
   */
  exports.prototype['system_memory_available_bytes'] = undefined;
  /**
   * @member {Boolean} system_memory_low
   */
  exports.prototype['system_memory_low'] = undefined;
  /**
   * @member {Number} system_memory_threshold_bytes
   */
  exports.prototype['system_memory_threshold_bytes'] = undefined;
  /**
   * @member {Number} application_memory_available_bytes
   */
  exports.prototype['application_memory_available_bytes'] = undefined;
  /**
   * @member {Number} application_memory_max_bytes
   */
  exports.prototype['application_memory_max_bytes'] = undefined;
  /**
   * @member {Number} application_memory_total_bytes
   */
  exports.prototype['application_memory_total_bytes'] = undefined;
  /**
   * @member {module:model/DeviceCurrentState.DeviceOrientation} device_orientation
   */
  exports.prototype['device_orientation'] = undefined;
  /**
   * @member {module:model/DeviceCurrentState.StatusBarOrientation} status_bar_orientation
   */
  exports.prototype['status_bar_orientation'] = undefined;


  /**
   * Allowed values for the <code>device_orientation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeviceOrientation = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "portrait"
     * @const
     */
    "portrait": "portrait",
    /**
     * value: "portrait_upside_down"
     * @const
     */
    "portrait_upside_down": "portrait_upside_down",
    /**
     * value: "landscape"
     * @const
     */
    "landscape": "landscape",
    /**
     * value: "LandscapeLeft"
     * @const
     */
    "LandscapeLeft": "LandscapeLeft",
    /**
     * value: "LandscapeRight"
     * @const
     */
    "LandscapeRight": "LandscapeRight",
    /**
     * value: "FaceUp"
     * @const
     */
    "FaceUp": "FaceUp",
    /**
     * value: "FaceDown"
     * @const
     */
    "FaceDown": "FaceDown",
    /**
     * value: "Square"
     * @const
     */
    "Square": "Square"  };

  /**
   * Allowed values for the <code>status_bar_orientation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusBarOrientation = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "portrait"
     * @const
     */
    "portrait": "portrait",
    /**
     * value: "portrait_upside_down"
     * @const
     */
    "portrait_upside_down": "portrait_upside_down",
    /**
     * value: "landscape"
     * @const
     */
    "landscape": "landscape",
    /**
     * value: "LandscapeLeft"
     * @const
     */
    "LandscapeLeft": "LandscapeLeft",
    /**
     * value: "LandscapeRight"
     * @const
     */
    "LandscapeRight": "LandscapeRight",
    /**
     * value: "FaceUp"
     * @const
     */
    "FaceUp": "FaceUp",
    /**
     * value: "FaceDown"
     * @const
     */
    "FaceDown": "FaceDown",
    /**
     * value: "Square"
     * @const
     */
    "Square": "Square"  };


  return exports;
}));



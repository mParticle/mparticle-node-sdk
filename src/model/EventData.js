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
    define(['ApiClient', 'model/DeviceCurrentState', 'model/GeoLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceCurrentState'), require('./GeoLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.EventData = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.GeoLocation);
  }
}(this, function(ApiClient, DeviceCurrentState, GeoLocation) {
  'use strict';




  /**
   * The EventData model module.
   * @module model/EventData
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>EventData</code>.
   * @alias module:model/EventData
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>EventData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventData} obj Optional instance to populate.
   * @return {module:model/EventData} The populated <code>EventData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timestamp_unixtime_ms')) {
        obj['timestamp_unixtime_ms'] = ApiClient.convertToType(data['timestamp_unixtime_ms'], 'Number');
      }
      if (data.hasOwnProperty('event_id')) {
        obj['event_id'] = ApiClient.convertToType(data['event_id'], 'Number');
      }
      if (data.hasOwnProperty('source_message_id')) {
        obj['source_message_id'] = ApiClient.convertToType(data['source_message_id'], 'String');
      }
      if (data.hasOwnProperty('session_id')) {
        obj['session_id'] = ApiClient.convertToType(data['session_id'], 'Number');
      }
      if (data.hasOwnProperty('session_uuid')) {
        obj['session_uuid'] = ApiClient.convertToType(data['session_uuid'], 'String');
      }
      if (data.hasOwnProperty('custom_attributes')) {
        obj['custom_attributes'] = ApiClient.convertToType(data['custom_attributes'], {'String': 'String'});
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = GeoLocation.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('device_current_state')) {
        obj['device_current_state'] = DeviceCurrentState.constructFromObject(data['device_current_state']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} timestamp_unixtime_ms
   */
  exports.prototype['timestamp_unixtime_ms'] = undefined;
  /**
   * @member {Number} event_id
   */
  exports.prototype['event_id'] = undefined;
  /**
   * @member {String} source_message_id
   */
  exports.prototype['source_message_id'] = undefined;
  /**
   * @member {Number} session_id
   */
  exports.prototype['session_id'] = undefined;
  /**
   * @member {String} session_uuid
   */
  exports.prototype['session_uuid'] = undefined;
  /**
   * @member {Object.<String, String>} custom_attributes
   */
  exports.prototype['custom_attributes'] = undefined;
  /**
   * @member {module:model/GeoLocation} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/DeviceCurrentState} device_current_state
   */
  exports.prototype['device_current_state'] = undefined;



  return exports;
}));



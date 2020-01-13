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
    define([
      'ApiClient',
      'model/DeviceCurrentState',
      'model/EventData',
      'model/GeoLocation',
      'model/MediaInfo',
      'model/EventBase'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./DeviceCurrentState'),
      require('./EventData'),
      require('./GeoLocation'),
      require('./MediaInfo'),
      require('./EventBase')
    );
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.AppEvent = factory(
      root.mParticle.ApiClient,
      root.mParticle.DeviceCurrentState,
      root.mParticle.EventData,
      root.mParticle.GeoLocation,
      root.mParticle.MediaInfo,
      root.mParticle.EventBase
    );
  }
})(this, function(
  ApiClient,
  DeviceCurrentState,
  EventData,
  GeoLocation,
  MediaInfo,
  EventBase
) {
  'use strict';

  /**
   * The AppEvent model module.
   * @module model/AppEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>AppEvent</code>.
   * @alias module:model/AppEvent
   * @class
   * @implements module:model/EventData
   * @param customEventType {module:model/AppEvent.CustomEventType}
   * @param eventName {String}
   */
  var exports = function(customEventType, eventName) {
    var _this = this;

    EventData.call(_this);
    _this['custom_event_type'] = customEventType;
    _this['event_name'] = eventName;
  };

  /**
   * Constructs a <code>AppEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppEvent} obj Optional instance to populate.
   * @return {module:model/AppEvent} The populated <code>AppEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('custom_event_type')) {
        obj['custom_event_type'] = ApiClient.convertToType(
          data['custom_event_type'],
          'String'
        );
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(
          data['event_name'],
          'String'
        );
      }
      if (data.hasOwnProperty('media_info')) {
        obj['media_info'] = MediaInfo.constructFromObject(data['media_info']);
      }
    }
    return obj;
  };

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.custom_event;
  };

  /**
   * @member {module:model/AppEvent.CustomEventType} custom_event_type
   */
  exports.prototype['custom_event_type'] = undefined;
  /**
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * @member {module:model/MediaInfo} media_info
   */
  exports.prototype['media_info'] = undefined;

  // Implement EventData interface:
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

  /**
   * @member {module:model/CustomFlags} custom_flags
   */
  exports.prototype['custom_flags'] = undefined;

  /**
   * Allowed values for the <code>custom_event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CustomEventType = {
    /**
     * value: "unknown"
     * @const
     */
    unknown: 'unknown',
    /**
     * value: "navigation"
     * @const
     */
    navigation: 'navigation',
    /**
     * value: "location"
     * @const
     */
    location: 'location',
    /**
     * value: "search"
     * @const
     */
    search: 'search',
    /**
     * value: "transaction"
     * @const
     */
    transaction: 'transaction',
    /**
     * value: "user_content"
     * @const
     */
    user_content: 'user_content',
    /**
     * value: "user_preference"
     * @const
     */
    user_preference: 'user_preference',
    /**
     * value: "social"
     * @const
     */
    social: 'social',
    /**
     * value: "other"
     * @const
     */
    other: 'other'
  };

  return exports;
});

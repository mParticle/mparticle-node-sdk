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
    define(['ApiClient', 'model/DeviceCurrentState', 'model/EventData', 'model/GeoLocation', 'model/EventBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceCurrentState'), require('./EventData'), require('./GeoLocation'), require('./EventBase'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.PushMessageEvent = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation, root.mParticle.EventBase);
  }
}(this, function(ApiClient, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The PushMessageEvent model module.
   * @module model/PushMessageEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>PushMessageEvent</code>.
   * @alias module:model/PushMessageEvent
   * @class
   * @implements module:model/EventData
   * @param pushMessageToken {String}
   * @param pushMessageType {module:model/PushMessageEvent.PushMessageType}
   * @param pushNotificationPayload {String}
   * @param applicationState {module:model/PushMessageEvent.ApplicationState}
   */
  var exports = function(pushMessageToken, pushMessageType, pushNotificationPayload, applicationState) {
    var _this = this;

    EventData.call(_this);
    _this['push_message_token'] = pushMessageToken;
    _this['push_message_type'] = pushMessageType;


    _this['push_notification_payload'] = pushNotificationPayload;
    _this['application_state'] = applicationState;

  };

  /**
   * Constructs a <code>PushMessageEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushMessageEvent} obj Optional instance to populate.
   * @return {module:model/PushMessageEvent} The populated <code>PushMessageEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('push_message_token')) {
        obj['push_message_token'] = ApiClient.convertToType(data['push_message_token'], 'String');
      }
      if (data.hasOwnProperty('push_message_type')) {
        obj['push_message_type'] = ApiClient.convertToType(data['push_message_type'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('network')) {
        obj['network'] = ApiClient.convertToType(data['network'], 'String');
      }
      if (data.hasOwnProperty('push_notification_payload')) {
        obj['push_notification_payload'] = ApiClient.convertToType(data['push_notification_payload'], 'String');
      }
      if (data.hasOwnProperty('application_state')) {
        obj['application_state'] = ApiClient.convertToType(data['application_state'], 'String');
      }
      if (data.hasOwnProperty('action_identifier')) {
        obj['action_identifier'] = ApiClient.convertToType(data['action_identifier'], 'String');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.push_message;
  }

  /**
   * @member {String} push_message_token
   */
  exports.prototype['push_message_token'] = undefined;
  /**
   * @member {module:model/PushMessageEvent.PushMessageType} push_message_type
   */
  exports.prototype['push_message_type'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} network
   */
  exports.prototype['network'] = undefined;
  /**
   * @member {String} push_notification_payload
   */
  exports.prototype['push_notification_payload'] = undefined;
  /**
   * @member {module:model/PushMessageEvent.ApplicationState} application_state
   */
  exports.prototype['application_state'] = undefined;
  /**
   * @member {String} action_identifier
   */
  exports.prototype['action_identifier'] = undefined;

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
   * Allowed values for the <code>push_message_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PushMessageType = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent",
    /**
     * value: "received"
     * @const
     */
    "received": "received",
    /**
     * value: "action"
     * @const
     */
    "action": "action"  };

  /**
   * Allowed values for the <code>application_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationState = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "not_running"
     * @const
     */
    "not_running": "not_running",
    /**
     * value: "background"
     * @const
     */
    "background": "background",
    /**
     * value: "foreground"
     * @const
     */
    "foreground": "foreground"  };


  return exports;
}));



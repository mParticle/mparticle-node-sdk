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
    root.mParticle.ApplicationStateTransitionEvent = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation);
  }
}(this, function(ApiClient, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The ApplicationStateTransitionEvent model module.
   * @module model/ApplicationStateTransitionEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ApplicationStateTransitionEvent</code>.
   * @alias module:model/ApplicationStateTransitionEvent
   * @class
   * @implements module:model/EventData
   * @param applicationTransitionType {module:model/ApplicationStateTransitionEvent.ApplicationTransitionType}
   */
  var exports = function(applicationTransitionType) {
    var _this = this;

    EventData.call(_this);




    _this['application_transition_type'] = applicationTransitionType;
  };

  /**
   * Constructs a <code>ApplicationStateTransitionEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationStateTransitionEvent} obj Optional instance to populate.
   * @return {module:model/ApplicationStateTransitionEvent} The populated <code>ApplicationStateTransitionEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('successfully_closed')) {
        obj['successfully_closed'] = ApiClient.convertToType(data['successfully_closed'], 'Boolean');
      }
      if (data.hasOwnProperty('is_first_run')) {
        obj['is_first_run'] = ApiClient.convertToType(data['is_first_run'], 'Boolean');
      }
      if (data.hasOwnProperty('is_upgrade')) {
        obj['is_upgrade'] = ApiClient.convertToType(data['is_upgrade'], 'Boolean');
      }
      if (data.hasOwnProperty('push_notification_payload')) {
        obj['push_notification_payload'] = ApiClient.convertToType(data['push_notification_payload'], 'String');
      }
      if (data.hasOwnProperty('application_transition_type')) {
        obj['application_transition_type'] = ApiClient.convertToType(data['application_transition_type'], 'String');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.application_state_transition;
  }

  /**
   * @member {Boolean} successfully_closed
   */
  exports.prototype['successfully_closed'] = undefined;
  /**
   * @member {Boolean} is_first_run
   */
  exports.prototype['is_first_run'] = undefined;
  /**
   * @member {Boolean} is_upgrade
   */
  exports.prototype['is_upgrade'] = undefined;
  /**
   * @member {String} push_notification_payload
   */
  exports.prototype['push_notification_payload'] = undefined;
  /**
   * @member {module:model/ApplicationStateTransitionEvent.ApplicationTransitionType} application_transition_type
   */
  exports.prototype['application_transition_type'] = undefined;

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
   * Allowed values for the <code>application_transition_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ApplicationTransitionType = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "application_initialized"
     * @const
     */
    "application_initialized": "application_initialized",
    /**
     * value: "application_exit"
     * @const
     */
    "application_exit": "application_exit",
    /**
     * value: "application_background"
     * @const
     */
    "application_background": "application_background",
    /**
     * value: "application_foreground"
     * @const
     */
    "application_foreground": "application_foreground"  };


  return exports;
}));



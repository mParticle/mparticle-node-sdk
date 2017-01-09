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
    root.mParticle.ProfileEvent = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation, root.mParticle.EventBase);
  }
}(this, function(ApiClient, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The ProfileEvent model module.
   * @module model/ProfileEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ProfileEvent</code>.
   * @alias module:model/ProfileEvent
   * @class
   * @implements module:model/EventData
   * @param profileName {String}
   * @param previousProfileName {String}
   * @param profileEventType {module:model/ProfileEvent.ProfileEventType}
   */
  var exports = function(profileName, previousProfileName, profileEventType) {
    var _this = this;

    EventData.call(_this);
    _this['profile_name'] = profileName;
    _this['previous_profile_name'] = previousProfileName;
    _this['profile_event_type'] = profileEventType;
  };

  /**
   * Constructs a <code>ProfileEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileEvent} obj Optional instance to populate.
   * @return {module:model/ProfileEvent} The populated <code>ProfileEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('profile_name')) {
        obj['profile_name'] = ApiClient.convertToType(data['profile_name'], 'String');
      }
      if (data.hasOwnProperty('previous_profile_name')) {
        obj['previous_profile_name'] = ApiClient.convertToType(data['previous_profile_name'], 'String');
      }
      if (data.hasOwnProperty('profile_event_type')) {
        obj['profile_event_type'] = ApiClient.convertToType(data['profile_event_type'], 'String');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.profile;
  }

  /**
   * @member {String} profile_name
   */
  exports.prototype['profile_name'] = undefined;
  /**
   * @member {String} previous_profile_name
   */
  exports.prototype['previous_profile_name'] = undefined;
  /**
   * @member {module:model/ProfileEvent.ProfileEventType} profile_event_type
   */
  exports.prototype['profile_event_type'] = undefined;

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
   * Allowed values for the <code>profile_event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProfileEventType = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "signup"
     * @const
     */
    "signup": "signup",
    /**
     * value: "login"
     * @const
     */
    "login": "login",
    /**
     * value: "logout"
     * @const
     */
    "logout": "logout",
    /**
     * value: "update"
     * @const
     */
    "update": "update",
    /**
     * value: "delete"
     * @const
     */
    "delete": "delete"  };


  return exports;
}));



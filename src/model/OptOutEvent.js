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
    root.mParticle.OptOutEvent = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation, root.mParticle.EventBase);
  }
}(this, function(ApiClient, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The OptOutEvent model module.
   * @module model/OptOutEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>OptOutEvent</code>.
   * @alias module:model/OptOutEvent
   * @class
   * @implements module:model/EventData
   * @param isOptedOut {Boolean}
   */
  var exports = function(isOptedOut) {
    var _this = this;

    EventData.call(_this);
    _this['is_opted_out'] = isOptedOut;
  };

  /**
   * Constructs a <code>OptOutEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptOutEvent} obj Optional instance to populate.
   * @return {module:model/OptOutEvent} The populated <code>OptOutEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('is_opted_out')) {
        obj['is_opted_out'] = ApiClient.convertToType(data['is_opted_out'], 'Boolean');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.opt_out;
  }

  /**
   * @member {Boolean} is_opted_out
   */
  exports.prototype['is_opted_out'] = undefined;

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



  return exports;
}));



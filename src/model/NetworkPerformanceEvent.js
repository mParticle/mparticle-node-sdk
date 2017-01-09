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
    root.mParticle.NetworkPerformanceEvent = factory(root.mParticle.ApiClient, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation, root.mParticle.EventBase);
  }
}(this, function(ApiClient, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The NetworkPerformanceEvent model module.
   * @module model/NetworkPerformanceEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>NetworkPerformanceEvent</code>.
   * @alias module:model/NetworkPerformanceEvent
   * @class
   * @implements module:model/EventData
   * @param httpVerb {String}
   * @param url {String}
   * @param timeElapsed {Number}
   * @param bytesIn {Number}
   * @param bytesOut {Number}
   * @param responseCode {Number}
   */
  var exports = function(httpVerb, url, timeElapsed, bytesIn, bytesOut, responseCode) {
    var _this = this;

    EventData.call(_this);
    _this['http_verb'] = httpVerb;
    _this['url'] = url;
    _this['time_elapsed'] = timeElapsed;
    _this['bytes_in'] = bytesIn;
    _this['bytes_out'] = bytesOut;
    _this['response_code'] = responseCode;

  };

  /**
   * Constructs a <code>NetworkPerformanceEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkPerformanceEvent} obj Optional instance to populate.
   * @return {module:model/NetworkPerformanceEvent} The populated <code>NetworkPerformanceEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('http_verb')) {
        obj['http_verb'] = ApiClient.convertToType(data['http_verb'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('time_elapsed')) {
        obj['time_elapsed'] = ApiClient.convertToType(data['time_elapsed'], 'Number');
      }
      if (data.hasOwnProperty('bytes_in')) {
        obj['bytes_in'] = ApiClient.convertToType(data['bytes_in'], 'Number');
      }
      if (data.hasOwnProperty('bytes_out')) {
        obj['bytes_out'] = ApiClient.convertToType(data['bytes_out'], 'Number');
      }
      if (data.hasOwnProperty('response_code')) {
        obj['response_code'] = ApiClient.convertToType(data['response_code'], 'Number');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'String');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.network_performance;
  }

  /**
   * @member {String} http_verb
   */
  exports.prototype['http_verb'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Number} time_elapsed
   */
  exports.prototype['time_elapsed'] = undefined;
  /**
   * @member {Number} bytes_in
   */
  exports.prototype['bytes_in'] = undefined;
  /**
   * @member {Number} bytes_out
   */
  exports.prototype['bytes_out'] = undefined;
  /**
   * @member {Number} response_code
   */
  exports.prototype['response_code'] = undefined;
  /**
   * @member {String} data
   */
  exports.prototype['data'] = undefined;

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



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
    define(['ApiClient', 'model/BreadcrumbEvent', 'model/DeviceCurrentState', 'model/EventData', 'model/GeoLocation', 'model/EventBase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BreadcrumbEvent'), require('./DeviceCurrentState'), require('./EventData'), require('./GeoLocation'), require('./EventBase'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.CrashReportEvent = factory(root.mParticle.ApiClient, root.mParticle.BreadcrumbEvent, root.mParticle.DeviceCurrentState, root.mParticle.EventData, root.mParticle.GeoLocation, root.mParticle.EventBase);
  }
}(this, function(ApiClient, BreadcrumbEvent, DeviceCurrentState, EventData, GeoLocation, EventBase) {
  'use strict';




  /**
   * The CrashReportEvent model module.
   * @module model/CrashReportEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CrashReportEvent</code>.
   * @alias module:model/CrashReportEvent
   * @class
   * @implements module:model/EventData
   * @param className {String}
   * @param message {String}
   * @param stackTrace {String}
   * @param exceptionHandled {Boolean}
   */
  var exports = function(className, message, stackTrace, exceptionHandled) {
    var _this = this;

    EventData.call(_this);

    _this['class_name'] = className;

    _this['message'] = message;
    _this['stack_trace'] = stackTrace;
    _this['exception_handled'] = exceptionHandled;





  };

  /**
   * Constructs a <code>CrashReportEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CrashReportEvent} obj Optional instance to populate.
   * @return {module:model/CrashReportEvent} The populated <code>CrashReportEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('breadcrumbs')) {
        obj['breadcrumbs'] = ApiClient.convertToType(data['breadcrumbs'], [BreadcrumbEvent]);
      }
      if (data.hasOwnProperty('class_name')) {
        obj['class_name'] = ApiClient.convertToType(data['class_name'], 'String');
      }
      if (data.hasOwnProperty('severity')) {
        obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('stack_trace')) {
        obj['stack_trace'] = ApiClient.convertToType(data['stack_trace'], 'String');
      }
      if (data.hasOwnProperty('exception_handled')) {
        obj['exception_handled'] = ApiClient.convertToType(data['exception_handled'], 'Boolean');
      }
      if (data.hasOwnProperty('topmost_context')) {
        obj['topmost_context'] = ApiClient.convertToType(data['topmost_context'], 'String');
      }
      if (data.hasOwnProperty('pl_crash_report_file_base64')) {
        obj['pl_crash_report_file_base64'] = ApiClient.convertToType(data['pl_crash_report_file_base64'], 'String');
      }
      if (data.hasOwnProperty('ios_image_base_address')) {
        obj['ios_image_base_address'] = ApiClient.convertToType(data['ios_image_base_address'], 'Number');
      }
      if (data.hasOwnProperty('ios_image_size')) {
        obj['ios_image_size'] = ApiClient.convertToType(data['ios_image_size'], 'Number');
      }
      if (data.hasOwnProperty('session_number')) {
        obj['session_number'] = ApiClient.convertToType(data['session_number'], 'Number');
      }
    }
    return obj;
  }

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.crash_report;
  }

  /**
   * @member {Array.<module:model/BreadcrumbEvent>} breadcrumbs
   */
  exports.prototype['breadcrumbs'] = undefined;
  /**
   * @member {String} class_name
   */
  exports.prototype['class_name'] = undefined;
  /**
   * @member {String} severity
   */
  exports.prototype['severity'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} stack_trace
   */
  exports.prototype['stack_trace'] = undefined;
  /**
   * @member {Boolean} exception_handled
   */
  exports.prototype['exception_handled'] = undefined;
  /**
   * @member {String} topmost_context
   */
  exports.prototype['topmost_context'] = undefined;
  /**
   * @member {String} pl_crash_report_file_base64
   */
  exports.prototype['pl_crash_report_file_base64'] = undefined;
  /**
   * @member {Number} ios_image_base_address
   */
  exports.prototype['ios_image_base_address'] = undefined;
  /**
   * @member {Number} ios_image_size
   */
  exports.prototype['ios_image_size'] = undefined;
  /**
   * @member {Number} session_number
   */
  exports.prototype['session_number'] = undefined;

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



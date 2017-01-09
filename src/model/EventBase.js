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
    define(['ApiClient', 'model/EventData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventData'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.EventBase = factory(root.mParticle.ApiClient, root.mParticle.EventData);
  }
}(this, function(ApiClient, EventData) {
  'use strict';




  /**
   * The EventBase model module.
   * @module model/EventBase
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>EventBase</code>.
   * @alias module:model/EventBase
   * @class
   * @param data {module:model/EventData}
   * @param eventType {module:model/EventBase.EventType}
   */
  var exports = function(data, eventType) {
    var _this = this;

    _this['data'] = data;

    if (!eventType || eventType === '') {
      eventType = 'custom_event';
    }

    _this['event_type'] = eventType;
  };

  /**
   * Constructs a <code>EventBase</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventBase} obj Optional instance to populate.
   * @return {module:model/EventBase} The populated <code>EventBase</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = EventData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('event_type')) {
        obj['event_type'] = ApiClient.convertToType(data['event_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EventData} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/EventBase.EventType} event_type
   */
  exports.prototype['event_type'] = undefined;


  /**
   * Allowed values for the <code>event_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventType = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "session_start"
     * @const
     */
    "session_start": "session_start",
    /**
     * value: "session_end"
     * @const
     */
    "session_end": "session_end",
    /**
     * value: "screen_view"
     * @const
     */
    "screen_view": "screen_view",
    /**
     * value: "custom_event"
     * @const
     */
    "custom_event": "custom_event",
    /**
     * value: "crash_report"
     * @const
     */
    "crash_report": "crash_report",
    /**
     * value: "opt_out"
     * @const
     */
    "opt_out": "opt_out",
    /**
     * value: "first_run"
     * @const
     */
    "first_run": "first_run",
    /**
     * value: "pre_attribution"
     * @const
     */
    "pre_attribution": "pre_attribution",
    /**
     * value: "push_registration"
     * @const
     */
    "push_registration": "push_registration",
    /**
     * value: "application_state_transition"
     * @const
     */
    "application_state_transition": "application_state_transition",
    /**
     * value: "push_message"
     * @const
     */
    "push_message": "push_message",
    /**
     * value: "network_performance"
     * @const
     */
    "network_performance": "network_performance",
    /**
     * value: "breadcrumb"
     * @const
     */
    "breadcrumb": "breadcrumb",
    /**
     * value: "profile"
     * @const
     */
    "profile": "profile",
    /**
     * value: "push_reaction"
     * @const
     */
    "push_reaction": "push_reaction",
    /**
     * value: "commerce_event"
     * @const
     */
    "commerce_event": "commerce_event"  };


  return exports;
}));



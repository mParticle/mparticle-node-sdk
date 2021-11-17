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
      'model/ApplicationInformation',
      'model/DeviceInformation',
      'model/EventBase',
      'model/UserIdentities',
      'model/BatchContext'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./ApplicationInformation'),
      require('./DeviceInformation'),
      require('./EventBase'),
      require('./UserIdentities'),
      require('./BatchContext')
    );
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.Batch = factory(
      root.mParticle.ApiClient,
      root.mParticle.ApplicationInformation,
      root.mParticle.DeviceInformation,
      root.mParticle.EventBase,
      root.mParticle.UserIdentities,
      root.mParticle.BatchContext
    );
  }
})(this, function(
  ApiClient,
  ApplicationInformation,
  DeviceInformation,
  EventBase,
  UserIdentities,
  BatchContext
) {
  'use strict';

  /**
   * The Batch model module.
   * @module model/Batch
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Batch</code>.
   * @alias module:model/Batch
   * @class
   * @param environment {module:model/Batch.Environment}
   */
  var exports = function(environment) {
    var _this = this;

    _this['environment'] = environment;

    _this.addEvent = function(event) {
      if (!this.events) {
        this.events = [];
      }

      this.events.push(new EventBase(event, event.getEventType()));
    };
  };

  /**
   * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Batch} obj Optional instance to populate.
   * @return {module:model/Batch} The populated <code>Batch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('events')) {
        obj['events'] = ApiClient.convertToType(data['events'], [EventBase]);
      }
      if (data.hasOwnProperty('source_request_id')) {
        obj['source_request_id'] = ApiClient.convertToType(
          data['source_request_id'],
          'String'
        );
      }
      if (data.hasOwnProperty('environment')) {
        obj['environment'] = ApiClient.convertToType(
          data['environment'],
          'String'
        );
      }
      if (data.hasOwnProperty('ip')) {
        obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
      }
      if (data.hasOwnProperty('schema_version')) {
        obj['schema_version'] = ApiClient.convertToType(
          data['schema_version'],
          'Number'
        );
      }
      if (data.hasOwnProperty('device_info')) {
        obj['device_info'] = DeviceInformation.constructFromObject(
          data['device_info']
        );
      }
      if (data.hasOwnProperty('application_info')) {
        obj['application_info'] = ApplicationInformation.constructFromObject(
          data['application_info']
        );
      }
      if (data.hasOwnProperty('user_attributes')) {
        obj['user_attributes'] = ApiClient.convertToType(
          data['user_attributes'],
          Object
        );
      }
      if (data.hasOwnProperty('deleted_user_attributes')) {
        obj['deleted_user_attributes'] = ApiClient.convertToType(
          data['deleted_user_attributes'],
          ['String']
        );
      }
      if (data.hasOwnProperty('user_identities')) {
        obj['user_identities'] = UserIdentities.constructFromObject(
          data['user_identities']
        );
      }
      if (data.hasOwnProperty('mpid')) {
        obj['mpid'] = ApiClient.convertToType(data['mpid'], 'Number');
      }
      if (data.hasOwnProperty('mp_deviceid')) {
        obj['mp_deviceid'] = ApiClient.convertToType(
          data['mp_deviceid'],
          'String'
        );
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = BatchContext.constructFromObject(
          data['context']
        );
      }
      if (data.hasOwnProperty('consent_state')) {
        // Deep copy consent state
        obj['consent_state'] = JSON.parse(
          JSON.stringify(data['consent_state'])
        );
      }
    }
    return obj;
  };

  /**
   * @member {Array.<module:model/EventBase>} events
   */
  exports.prototype['events'] = undefined;
  /**
   * @member {String} source_request_id
   */
  exports.prototype['source_request_id'] = undefined;
  /**
   * @member {module:model/Batch.Environment} environment
   */
  exports.prototype['environment'] = undefined;
  /**
   * @member {String} ip
   */
  exports.prototype['ip'] = undefined;
  /**
   * @member {Number} schema_version
   */
  exports.prototype['schema_version'] = undefined;
  /**
   * @member {module:model/DeviceInformation} device_info
   */
  exports.prototype['device_info'] = undefined;
  /**
   * @member {module:model/ApplicationInformation} application_info
   */
  exports.prototype['application_info'] = undefined;
  /**
   * @member {Object} user_attributes
   */
  exports.prototype['user_attributes'] = undefined;
  /**
   * @member {Array.<String>} deleted_user_attributes
   */
  exports.prototype['deleted_user_attributes'] = undefined;
  /**
   * @member {module:model/UserIdentities} user_identities
   */
  exports.prototype['user_identities'] = undefined;
  /**
   * @member {Number} mpid
   */
  exports.prototype['mpid'] = undefined;
  /**
   * @member {String} mp_deviceid
   */
  exports.prototype['mp_deviceid'] = undefined;
  /**
   * @member {module:model/BatchContext} context
   */
     exports.prototype['context'] = undefined;
  /**
   * @member {Object} consent_state
   */
  exports.prototype['consent_state'] = undefined;

  /**
   * Allowed values for the <code>environment</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Environment = {
    /**
     * value: "production"
     * @const
     */
    production: 'production',
    /**
     * value: "development"
     * @const
     */
    development: 'development'
  };

  return exports;
});

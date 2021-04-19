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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.DeviceInformation = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeviceInformation model module.
   * @module model/DeviceInformation
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>DeviceInformation</code>.
   * @alias module:model/DeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;



































  };

  /**
   * Constructs a <code>DeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceInformation} obj Optional instance to populate.
   * @return {module:model/DeviceInformation} The populated <code>DeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ApiClient.convertToType(data['product'], 'String');
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = ApiClient.convertToType(data['device'], 'String');
      }
      if (data.hasOwnProperty('android_uuid')) {
        obj['android_uuid'] = ApiClient.convertToType(data['android_uuid'], 'String');
      }
      if (data.hasOwnProperty('device_manufacturer')) {
        obj['device_manufacturer'] = ApiClient.convertToType(data['device_manufacturer'], 'String');
      }
      if (data.hasOwnProperty('platform')) {
        obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
      }
      if (data.hasOwnProperty('os_version')) {
        obj['os_version'] = ApiClient.convertToType(data['os_version'], 'String');
      }
      if (data.hasOwnProperty('device_model')) {
        obj['device_model'] = ApiClient.convertToType(data['device_model'], 'String');
      }
      if (data.hasOwnProperty('screen_height')) {
        obj['screen_height'] = ApiClient.convertToType(data['screen_height'], 'Number');
      }
      if (data.hasOwnProperty('screen_width')) {
        obj['screen_width'] = ApiClient.convertToType(data['screen_width'], 'Number');
      }
      if (data.hasOwnProperty('screen_dpi')) {
        obj['screen_dpi'] = ApiClient.convertToType(data['screen_dpi'], 'Number');
      }
      if (data.hasOwnProperty('device_country')) {
        obj['device_country'] = ApiClient.convertToType(data['device_country'], 'String');
      }
      if (data.hasOwnProperty('locale_language')) {
        obj['locale_language'] = ApiClient.convertToType(data['locale_language'], 'String');
      }
      if (data.hasOwnProperty('locale_country')) {
        obj['locale_country'] = ApiClient.convertToType(data['locale_country'], 'String');
      }
      if (data.hasOwnProperty('network_country')) {
        obj['network_country'] = ApiClient.convertToType(data['network_country'], 'String');
      }
      if (data.hasOwnProperty('network_carrier')) {
        obj['network_carrier'] = ApiClient.convertToType(data['network_carrier'], 'String');
      }
      if (data.hasOwnProperty('network_code')) {
        obj['network_code'] = ApiClient.convertToType(data['network_code'], 'String');
      }
      if (data.hasOwnProperty('network_mobile_country_code')) {
        obj['network_mobile_country_code'] = ApiClient.convertToType(data['network_mobile_country_code'], 'String');
      }
      if (data.hasOwnProperty('timezone_offset')) {
        obj['timezone_offset'] = ApiClient.convertToType(data['timezone_offset'], 'Number');
      }
      if (data.hasOwnProperty('build_identifier')) {
        obj['build_identifier'] = ApiClient.convertToType(data['build_identifier'], 'String');
      }
      if (data.hasOwnProperty('http_header_user_agent')) {
        obj['http_header_user_agent'] = ApiClient.convertToType(data['http_header_user_agent'], 'String');
      }
      if (data.hasOwnProperty('ios_advertising_id')) {
        obj['ios_advertising_id'] = ApiClient.convertToType(data['ios_advertising_id'], 'String');
      }
      if (data.hasOwnProperty('push_token')) {
        obj['push_token'] = ApiClient.convertToType(data['push_token'], 'String');
      }
      if (data.hasOwnProperty('cpu_architecture')) {
        obj['cpu_architecture'] = ApiClient.convertToType(data['cpu_architecture'], 'String');
      }
      if (data.hasOwnProperty('is_tablet')) {
        obj['is_tablet'] = ApiClient.convertToType(data['is_tablet'], 'Boolean');
      }
      if (data.hasOwnProperty('push_notification_sound_enabled')) {
        obj['push_notification_sound_enabled'] = ApiClient.convertToType(data['push_notification_sound_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('push_notification_vibrate_enabled')) {
        obj['push_notification_vibrate_enabled'] = ApiClient.convertToType(data['push_notification_vibrate_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('radio_access_technology')) {
        obj['radio_access_technology'] = ApiClient.convertToType(data['radio_access_technology'], 'String');
      }
      if (data.hasOwnProperty('supports_telephony')) {
        obj['supports_telephony'] = ApiClient.convertToType(data['supports_telephony'], 'Boolean');
      }
      if (data.hasOwnProperty('has_nfc')) {
        obj['has_nfc'] = ApiClient.convertToType(data['has_nfc'], 'Boolean');
      }
      if (data.hasOwnProperty('bluetooth_enabled')) {
        obj['bluetooth_enabled'] = ApiClient.convertToType(data['bluetooth_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('bluetooth_version')) {
        obj['bluetooth_version'] = ApiClient.convertToType(data['bluetooth_version'], 'String');
      }
      if (data.hasOwnProperty('att_timestamp_unixtime_ms')) {
        obj['att_timestamp_unixtime_ms'] = ApiClient.convertToType(data['att_timestamp_unixtime_ms'], 'Number');
      }
      if (data.hasOwnProperty('att_authorization_status')) {
        obj['att_authorization_status'] = ApiClient.convertToType(data['att_authorization_status'], 'String');
      }
      if (data.hasOwnProperty('ios_idfv')) {
        obj['ios_idfv'] = ApiClient.convertToType(data['ios_idfv'], 'String');
      }
      if (data.hasOwnProperty('android_advertising_id')) {
        obj['android_advertising_id'] = ApiClient.convertToType(data['android_advertising_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * @member {String} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {String} device
   */
  exports.prototype['device'] = undefined;
  /**
   * @member {String} android_uuid
   */
  exports.prototype['android_uuid'] = undefined;
  /**
   * @member {String} device_manufacturer
   */
  exports.prototype['device_manufacturer'] = undefined;
  /**
   * @member {module:model/DeviceInformation.Platform} platform
   */
  exports.prototype['platform'] = undefined;
  /**
   * @member {String} os_version
   */
  exports.prototype['os_version'] = undefined;
  /**
   * @member {String} device_model
   */
  exports.prototype['device_model'] = undefined;
  /**
   * @member {Number} screen_height
   */
  exports.prototype['screen_height'] = undefined;
  /**
   * @member {Number} screen_width
   */
  exports.prototype['screen_width'] = undefined;
  /**
   * @member {Number} screen_dpi
   */
  exports.prototype['screen_dpi'] = undefined;
  /**
   * @member {String} device_country
   */
  exports.prototype['device_country'] = undefined;
  /**
   * @member {String} locale_language
   */
  exports.prototype['locale_language'] = undefined;
  /**
   * @member {String} locale_country
   */
  exports.prototype['locale_country'] = undefined;
  /**
   * @member {String} network_country
   */
  exports.prototype['network_country'] = undefined;
  /**
   * @member {String} network_carrier
   */
  exports.prototype['network_carrier'] = undefined;
  /**
   * @member {String} network_code
   */
  exports.prototype['network_code'] = undefined;
  /**
   * @member {String} network_mobile_country_code
   */
  exports.prototype['network_mobile_country_code'] = undefined;
  /**
   * @member {Number} timezone_offset
   */
  exports.prototype['timezone_offset'] = undefined;
  /**
   * @member {String} build_identifier
   */
  exports.prototype['build_identifier'] = undefined;
  /**
   * @member {String} http_header_user_agent
   */
  exports.prototype['http_header_user_agent'] = undefined;
  /**
   * @member {String} ios_advertising_id
   */
  exports.prototype['ios_advertising_id'] = undefined;
  /**
   * @member {String} push_token
   */
  exports.prototype['push_token'] = undefined;
  /**
   * @member {String} cpu_architecture
   */
  exports.prototype['cpu_architecture'] = undefined;
  /**
   * @member {Boolean} is_tablet
   */
  exports.prototype['is_tablet'] = undefined;
  /**
   * @member {Boolean} push_notification_sound_enabled
   */
  exports.prototype['push_notification_sound_enabled'] = undefined;
  /**
   * @member {Boolean} push_notification_vibrate_enabled
   */
  exports.prototype['push_notification_vibrate_enabled'] = undefined;
  /**
   * @member {String} radio_access_technology
   */
  exports.prototype['radio_access_technology'] = undefined;
  /**
   * @member {Boolean} supports_telephony
   */
  exports.prototype['supports_telephony'] = undefined;
  /**
   * @member {Boolean} has_nfc
   */
  exports.prototype['has_nfc'] = undefined;
  /**
   * @member {Boolean} bluetooth_enabled
   */
  exports.prototype['bluetooth_enabled'] = undefined;
  /**
   * @member {String} bluetooth_version
   */
  exports.prototype['bluetooth_version'] = undefined;
  /**
   * @member {Number} att_timestamp_unixtime_ms
   */
  exports.prototype['att_timestamp_unixtime_ms'] = undefined;
  /**
   * @member {String} att_authorization_status
   */
  exports.prototype['att_authorization_status'] = undefined;
  /**
   * @member {String} ios_idfv
   */
  exports.prototype['ios_idfv'] = undefined;
  /**
   * @member {String} android_advertising_id
   */
  exports.prototype['android_advertising_id'] = undefined;


  /**
   * Allowed values for the <code>platform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Platform = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "iOS"
     * @const
     */
    "iOS": "iOS",
    /**
     * value: "Android"
     * @const
     */
    "Android": "Android",
    /**
     * value: "tvOS"
     * @const
     */
    "tvOS": "tvOS"  };

    /**
   * Allowed values for the <code>att_authorization_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ATTAuthorizationStatus = {
    /**
     * value: "authorized"
     * @const
     */
    "authorized": "authorized",
    /**
     * value: "denied"
     * @const
     */
    "denied": "denied",
    /**
     * value: "not_determined"
     * @const
     */
    "restricted": "not_determined",
    /**
     * value: "restricted"
     * @const
     */
    "restricted": "restricted"  };


  return exports;
}));



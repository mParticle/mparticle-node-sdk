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
      'model/ProductAction',
      'model/ProductImpression',
      'model/PromotionAction',
      'model/ShoppingCart',
      'model/EventBase'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('../ApiClient'),
      require('./DeviceCurrentState'),
      require('./EventData'),
      require('./GeoLocation'),
      require('./ProductAction'),
      require('./ProductImpression'),
      require('./PromotionAction'),
      require('./ShoppingCart'),
      require('./EventBase')
    );
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.CommerceEvent = factory(
      root.mParticle.ApiClient,
      root.mParticle.DeviceCurrentState,
      root.mParticle.EventData,
      root.mParticle.GeoLocation,
      root.mParticle.ProductAction,
      root.mParticle.ProductImpression,
      root.mParticle.PromotionAction,
      root.mParticle.ShoppingCart,
      root.mParticle.EventBase
    );
  }
})(this, function(
  ApiClient,
  DeviceCurrentState,
  EventData,
  GeoLocation,
  ProductAction,
  ProductImpression,
  PromotionAction,
  ShoppingCart,
  EventBase
) {
  'use strict';

  /**
   * The CommerceEvent model module.
   * @module model/CommerceEvent
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>CommerceEvent</code>.
   * @alias module:model/CommerceEvent
   * @class
   * @implements module:model/EventData
   */
  var exports = function() {
    var _this = this;

    EventData.call(_this);
  };

  /**
   * Constructs a <code>CommerceEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommerceEvent} obj Optional instance to populate.
   * @return {module:model/CommerceEvent} The populated <code>CommerceEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      EventData.constructFromObject(data, obj);
      if (data.hasOwnProperty('product_action')) {
        obj['product_action'] = ProductAction.constructFromObject(
          data['product_action']
        );
      }
      if (data.hasOwnProperty('promotion_action')) {
        obj['promotion_action'] = PromotionAction.constructFromObject(
          data['promotion_action']
        );
      }
      if (data.hasOwnProperty('product_impressions')) {
        obj['product_impressions'] = ApiClient.convertToType(
          data['product_impressions'],
          [ProductImpression]
        );
      }
      if (data.hasOwnProperty('shopping_cart')) {
        obj['shopping_cart'] = ShoppingCart.constructFromObject(
          data['shopping_cart']
        );
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(
          data['currency_code'],
          'String'
        );
      }
      if (data.hasOwnProperty('screen_name')) {
        obj['screen_name'] = ApiClient.convertToType(
          data['screen_name'],
          'String'
        );
      }
      if (data.hasOwnProperty('is_non_interactive')) {
        obj['is_non_interactive'] = ApiClient.convertToType(
          data['is_non_interactive'],
          'Boolean'
        );
      }
    }
    return obj;
  };

  exports.prototype['getEventType'] = function() {
    return EventBase.EventType.commerce_event;
  };

  /**
   * @member {module:model/ProductAction} product_action
   */
  exports.prototype['product_action'] = undefined;
  /**
   * @member {module:model/PromotionAction} promotion_action
   */
  exports.prototype['promotion_action'] = undefined;
  /**
   * @member {Array.<module:model/ProductImpression>} product_impressions
   */
  exports.prototype['product_impressions'] = undefined;
  /**
   * @member {module:model/ShoppingCart} shopping_cart
   */
  exports.prototype['shopping_cart'] = undefined;
  /**
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} screen_name
   */
  exports.prototype['screen_name'] = undefined;
  /**
   * @member {Boolean} is_non_interactive
   */
  exports.prototype['is_non_interactive'] = undefined;

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

  return exports;
});

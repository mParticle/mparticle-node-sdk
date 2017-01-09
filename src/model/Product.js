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
    root.mParticle.Product = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   * @param id {String}
   * @param name {String}
   * @param price {Number}
   * @param totalProductAmount {Number}
   */
  var exports = function(id, name, price, totalProductAmount) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;




    _this['price'] = price;



    _this['total_product_amount'] = totalProductAmount;

  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('variant')) {
        obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('coupon_code')) {
        obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
      }
      if (data.hasOwnProperty('added_to_cart_time_ms')) {
        obj['added_to_cart_time_ms'] = ApiClient.convertToType(data['added_to_cart_time_ms'], 'Number');
      }
      if (data.hasOwnProperty('total_product_amount')) {
        obj['total_product_amount'] = ApiClient.convertToType(data['total_product_amount'], 'Number');
      }
      if (data.hasOwnProperty('custom_attributes')) {
        obj['custom_attributes'] = ApiClient.convertToType(data['custom_attributes'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} variant
   */
  exports.prototype['variant'] = undefined;
  /**
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {String} coupon_code
   */
  exports.prototype['coupon_code'] = undefined;
  /**
   * @member {Number} added_to_cart_time_ms
   */
  exports.prototype['added_to_cart_time_ms'] = undefined;
  /**
   * @member {Number} total_product_amount
   */
  exports.prototype['total_product_amount'] = undefined;
  /**
   * @member {Object.<String, String>} custom_attributes
   */
  exports.prototype['custom_attributes'] = undefined;



  return exports;
}));



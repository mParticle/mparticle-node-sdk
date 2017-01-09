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
    define(['ApiClient', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.ProductAction = factory(root.mParticle.ApiClient, root.mParticle.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';




  /**
   * The ProductAction model module.
   * @module model/ProductAction
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ProductAction</code>.
   * @alias module:model/ProductAction
   * @class
   * @param action {module:model/ProductAction.Action}
   * @param transactionId {String}
   * @param totalAmount {Number}
   * @param products {Array.<module:model/Product>}
   */
  var exports = function(action, transactionId, totalAmount, products) {
    var _this = this;

    _this['action'] = action;




    _this['transaction_id'] = transactionId;

    _this['total_amount'] = totalAmount;



    _this['products'] = products;
  };

  /**
   * Constructs a <code>ProductAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAction} obj Optional instance to populate.
   * @return {module:model/ProductAction} The populated <code>ProductAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('checkout_step')) {
        obj['checkout_step'] = ApiClient.convertToType(data['checkout_step'], 'Number');
      }
      if (data.hasOwnProperty('checkout_options')) {
        obj['checkout_options'] = ApiClient.convertToType(data['checkout_options'], 'String');
      }
      if (data.hasOwnProperty('product_action_list')) {
        obj['product_action_list'] = ApiClient.convertToType(data['product_action_list'], 'String');
      }
      if (data.hasOwnProperty('product_list_source')) {
        obj['product_list_source'] = ApiClient.convertToType(data['product_list_source'], 'String');
      }
      if (data.hasOwnProperty('transaction_id')) {
        obj['transaction_id'] = ApiClient.convertToType(data['transaction_id'], 'String');
      }
      if (data.hasOwnProperty('affiliation')) {
        obj['affiliation'] = ApiClient.convertToType(data['affiliation'], 'String');
      }
      if (data.hasOwnProperty('total_amount')) {
        obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
      }
      if (data.hasOwnProperty('tax_amount')) {
        obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
      }
      if (data.hasOwnProperty('shipping_amount')) {
        obj['shipping_amount'] = ApiClient.convertToType(data['shipping_amount'], 'Number');
      }
      if (data.hasOwnProperty('coupon_code')) {
        obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProductAction.Action} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {Number} checkout_step
   */
  exports.prototype['checkout_step'] = undefined;
  /**
   * @member {String} checkout_options
   */
  exports.prototype['checkout_options'] = undefined;
  /**
   * @member {String} product_action_list
   */
  exports.prototype['product_action_list'] = undefined;
  /**
   * @member {String} product_list_source
   */
  exports.prototype['product_list_source'] = undefined;
  /**
   * @member {String} transaction_id
   */
  exports.prototype['transaction_id'] = undefined;
  /**
   * @member {String} affiliation
   */
  exports.prototype['affiliation'] = undefined;
  /**
   * @member {Number} total_amount
   */
  exports.prototype['total_amount'] = undefined;
  /**
   * @member {Number} tax_amount
   */
  exports.prototype['tax_amount'] = undefined;
  /**
   * @member {Number} shipping_amount
   */
  exports.prototype['shipping_amount'] = undefined;
  /**
   * @member {String} coupon_code
   */
  exports.prototype['coupon_code'] = undefined;
  /**
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Action = {
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown",
    /**
     * value: "add_to_cart"
     * @const
     */
    "add_to_cart": "add_to_cart",
    /**
     * value: "remove_from_cart"
     * @const
     */
    "remove_from_cart": "remove_from_cart",
    /**
     * value: "checkout"
     * @const
     */
    "checkout": "checkout",
    /**
     * value: "checkout_option"
     * @const
     */
    "checkout_option": "checkout_option",
    /**
     * value: "click"
     * @const
     */
    "click": "click",
    /**
     * value: "view_detail"
     * @const
     */
    "view_detail": "view_detail",
    /**
     * value: "purchase"
     * @const
     */
    "purchase": "purchase",
    /**
     * value: "refund"
     * @const
     */
    "refund": "refund",
    /**
     * value: "add_to_wishlist"
     * @const
     */
    "add_to_wishlist": "add_to_wishlist",
    /**
     * value: "remove_from_wish_list"
     * @const
     */
    "remove_from_wish_list": "remove_from_wish_list"  };


  return exports;
}));



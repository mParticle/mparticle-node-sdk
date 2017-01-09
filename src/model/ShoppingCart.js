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
    root.mParticle.ShoppingCart = factory(root.mParticle.ApiClient, root.mParticle.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';




  /**
   * The ShoppingCart model module.
   * @module model/ShoppingCart
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ShoppingCart</code>.
   * @alias module:model/ShoppingCart
   * @class
   * @param products {Array.<module:model/Product>}
   */
  var exports = function(products) {
    var _this = this;

    _this['products'] = products;
  };

  /**
   * Constructs a <code>ShoppingCart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShoppingCart} obj Optional instance to populate.
   * @return {module:model/ShoppingCart} The populated <code>ShoppingCart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;



  return exports;
}));



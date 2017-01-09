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
    root.mParticle.ProductImpression = factory(root.mParticle.ApiClient, root.mParticle.Product);
  }
}(this, function(ApiClient, Product) {
  'use strict';




  /**
   * The ProductImpression model module.
   * @module model/ProductImpression
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>ProductImpression</code>.
   * @alias module:model/ProductImpression
   * @class
   * @param productImpressionList {String}
   * @param products {Array.<module:model/Product>}
   */
  var exports = function(productImpressionList, products) {
    var _this = this;

    _this['product_impression_list'] = productImpressionList;
    _this['products'] = products;
  };

  /**
   * Constructs a <code>ProductImpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductImpression} obj Optional instance to populate.
   * @return {module:model/ProductImpression} The populated <code>ProductImpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product_impression_list')) {
        obj['product_impression_list'] = ApiClient.convertToType(data['product_impression_list'], 'String');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
    }
    return obj;
  }

  /**
   * @member {String} product_impression_list
   */
  exports.prototype['product_impression_list'] = undefined;
  /**
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;



  return exports;
}));



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
    define(['ApiClient', 'model/Promotion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Promotion'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.PromotionAction = factory(root.mParticle.ApiClient, root.mParticle.Promotion);
  }
}(this, function(ApiClient, Promotion) {
  'use strict';




  /**
   * The PromotionAction model module.
   * @module model/PromotionAction
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>PromotionAction</code>.
   * @alias module:model/PromotionAction
   * @class
   * @param action {module:model/PromotionAction.Action}
   * @param promotions {Array.<module:model/Promotion>}
   */
  var exports = function(action, promotions) {
    var _this = this;

    _this['action'] = action;
    _this['promotions'] = promotions;
  };

  /**
   * Constructs a <code>PromotionAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromotionAction} obj Optional instance to populate.
   * @return {module:model/PromotionAction} The populated <code>PromotionAction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('promotions')) {
        obj['promotions'] = ApiClient.convertToType(data['promotions'], [Promotion]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PromotionAction.Action} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {Array.<module:model/Promotion>} promotions
   */
  exports.prototype['promotions'] = undefined;


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
     * value: "view"
     * @const
     */
    "view": "view",
    /**
     * value: "click"
     * @const
     */
    "click": "click"  };


  return exports;
}));



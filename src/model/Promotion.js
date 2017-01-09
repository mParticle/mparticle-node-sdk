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
    root.mParticle.Promotion = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Promotion model module.
   * @module model/Promotion
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Promotion</code>.
   * @alias module:model/Promotion
   * @class
   * @param id {String}
   * @param name {String}
   * @param creative {String}
   * @param position {String}
   */
  var exports = function(id, name, creative, position) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['creative'] = creative;
    _this['position'] = position;
  };

  /**
   * Constructs a <code>Promotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Promotion} obj Optional instance to populate.
   * @return {module:model/Promotion} The populated <code>Promotion</code> instance.
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
      if (data.hasOwnProperty('creative')) {
        obj['creative'] = ApiClient.convertToType(data['creative'], 'String');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
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
   * @member {String} creative
   */
  exports.prototype['creative'] = undefined;
  /**
   * @member {String} position
   */
  exports.prototype['position'] = undefined;



  return exports;
}));



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
    root.mParticle.UserIdentities = factory(root.mParticle.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserIdentities model module.
   * @module model/UserIdentities
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>UserIdentities</code>.
   * @alias module:model/UserIdentities
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>UserIdentities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserIdentities} obj Optional instance to populate.
   * @return {module:model/UserIdentities} The populated <code>UserIdentities</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('other')) {
        obj['other'] = ApiClient.convertToType(data['other'], 'String');
      }
      if (data.hasOwnProperty('customerid')) {
        obj['customerid'] = ApiClient.convertToType(data['customerid'], 'String');
      }
      if (data.hasOwnProperty('facebook')) {
        obj['facebook'] = ApiClient.convertToType(data['facebook'], 'String');
      }
      if (data.hasOwnProperty('twitter')) {
        obj['twitter'] = ApiClient.convertToType(data['twitter'], 'String');
      }
      if (data.hasOwnProperty('google')) {
        obj['google'] = ApiClient.convertToType(data['google'], 'String');
      }
      if (data.hasOwnProperty('microsoft')) {
        obj['microsoft'] = ApiClient.convertToType(data['microsoft'], 'String');
      }
      if (data.hasOwnProperty('yahoo')) {
        obj['yahoo'] = ApiClient.convertToType(data['yahoo'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('alias')) {
        obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
      }
      if (data.hasOwnProperty('facebook_custom_audience_id')) {
        obj['facebook_custom_audience_id'] = ApiClient.convertToType(data['facebook_custom_audience_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} other
   */
  exports.prototype['other'] = undefined;
  /**
   * @member {String} customerid
   */
  exports.prototype['customerid'] = undefined;
  /**
   * @member {String} facebook
   */
  exports.prototype['facebook'] = undefined;
  /**
   * @member {String} twitter
   */
  exports.prototype['twitter'] = undefined;
  /**
   * @member {String} google
   */
  exports.prototype['google'] = undefined;
  /**
   * @member {String} microsoft
   */
  exports.prototype['microsoft'] = undefined;
  /**
   * @member {String} yahoo
   */
  exports.prototype['yahoo'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} alias
   */
  exports.prototype['alias'] = undefined;
  /**
   * @member {String} facebook_custom_audience_id
   */
  exports.prototype['facebook_custom_audience_id'] = undefined;



  return exports;
}));



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
      root.mParticle.DataPlanContext = factory(root.mParticle.ApiClient);
    }
  }(this, function(ApiClient) {
    'use strict';
  
  
  
  
    /**
     * The DataPlanContext model module.
     * @module model/DataPlanContext
     * @version 1.0.1
     */
  
    /**
     * Constructs a new <code>DataPlanContext</code>.
     * @alias module:model/DataPlanContext
     * @class
     */
    var exports = function() {
      var _this = this;
    };
  
    /**
     * Constructs a <code>DataPlanContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataPlanContext} obj Optional instance to populate.
     * @return {module:model/DataPlanContext} The populated <code>DataPlanContext</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
      if (data) {
        obj = obj || new exports();
  
        if (data.hasOwnProperty('plan_id')) {
            obj['plan_id'] = ApiClient.convertToType(data['plan_id'], 'String');
        }
        if (data.hasOwnProperty('plan_version')) {
            obj['plan_version'] = ApiClient.convertToType(data['plan_version'], 'Number');
        }
      }
      return obj;
    }
  
    /**
     * @member {String} plan_id
     */
    exports.prototype['plan_id'] = undefined;
    /**
     * @member {Number} plan_version
     */
    exports.prototype['plan_version'] = undefined;
  
    return exports;
  }));
  
  
  
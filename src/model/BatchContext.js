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
      root.mParticle.BatchContext = factory(root.mParticle.ApiClient);
    }
  }(this, function(ApiClient) {
    'use strict';
  
  
  
  
    /**
     * The BatchContext model module.
     * @module model/BatchContext
     * @version 1.0.1
     */
  
    /**
     * Constructs a new <code>BatchContext</code>.
     * @alias module:model/BatchContext
     * @class
     */
    var exports = function() {
      var _this = this;
    };
  
    /**
     * Constructs a <code>BatchContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchContext} obj Optional instance to populate.
     * @return {module:model/BatchContext} The populated <code>BatchContext</code> instance.
     */
    exports.constructFromObject = function(data, obj) {
      if (data) {
        obj = obj || new exports();
  
        if (data.hasOwnProperty('data_plan')) {
            obj['data_plan'] = DataPlanContext.constructFromObject(
                data['data_plan']
            );
        }
      }
      return obj;
    }
  
    /**
     * @member {module:model/DataPlanContext} data_plan
     */
    exports.prototype['data_plan'] = undefined;
  
    return exports;
  }));
  
  
  
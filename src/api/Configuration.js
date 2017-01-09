(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }

    root.mParticle.Configuration = factory();
  }
}(this, function() {
  'use strict';

  var exports = function(api_key, api_secret) {
    var _this = this;

    _this['api_key'] = api_key;
    _this['api_secret'] = api_secret;

    _this.encodedHeader = function() {
      if(_this.api_key && _this.api_secret) {
        return 'Basic ' + new Buffer(_this.api_key + ':' + _this.api_secret).toString('base64');
      }

      return '';
    };
  };

  /**
   * @member {String} api_key
   */
  exports.prototype['api_key'] = undefined;
  /**
   * @member {String} api_secret
   */
  exports.prototype['api_secret'] = undefined;

  return exports;
}));



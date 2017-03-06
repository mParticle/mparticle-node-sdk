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
    define(['ApiClient', 'model/ApiResponse', 'model/Batch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponse'), require('../model/Batch'), require('./Configuration'));
  } else {
    // Browser globals (root is window)
    if (!root.mParticle) {
      root.mParticle = {};
    }
    root.mParticle.EventsApi = factory(root.mParticle.ApiClient, root.mParticle.ApiResponse, root.mParticle.Batch, root.mParticle.Configuration);
  }
}(this, function(ApiClient, ApiResponse, Batch) {
  'use strict';

  /**
   * Events service.
   * @module api/EventsApi
   * @version 1.0.1
   */

  /**
   * Constructs a new EventsApi.
   * @alias module:api/EventsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configuration, apiClient) {
    this.configuration = configuration;
    this.apiClient = apiClient || new ApiClient();

    if(this.configuration) {
      this.apiClient.authentications['basic'] = {
        type: 'basic',
        configuration: this.configuration
      };
    }

    /**
     * Callback function to receive the result of the bulkUploadEvents operation.
     * @callback module:api/EventsApi~bulkUploadEventsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send events to mParticle
     *
     * @param {Array.<module:model/Batch>} body Up to 100 Batch objects
     * @param {module:api/EventsApi~bulkUploadEventsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkUploadEvents = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling bulkUploadEvents");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/bulkevents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadEvents operation.
     * @callback module:api/EventsApi~uploadEventsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send events to mParticle
     *
     * @param {module:model/Batch} body Batch of event data
     * @param {module:api/EventsApi~uploadEventsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.uploadEvents = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling uploadEvents");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic'];
      var contentTypes = ['application/json'];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

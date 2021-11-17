/**
 * mParticle
 * mParticle Event API
 *
 * OpenAPI spec version: 1.0.1
 * Contact: support@mparticle.com
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      'ApiClient',
      'model/ApiResponse',
      'model/ApiResponseErrors',
      'model/AppEvent',
      'model/ApplicationInformation',
      'model/ApplicationStateTransitionEvent',
      'model/AttributionInfo',
      'model/Batch',
      'model/BreadcrumbEvent',
      'model/CCPAConsentState',
      'model/ConsentState',
      'model/CommerceEvent',
      'model/CrashReportEvent',
      'model/DeviceCurrentState',
      'model/DeviceInformation',
      'model/EventBase',
      'model/EventData',
      'model/FirstRunEvent',
      'model/GDPRConsentState',
      'model/GeoLocation',
      'model/MediaInfo',
      'model/NetworkPerformanceEvent',
      'model/OptOutEvent',
      'model/Product',
      'model/ProductAction',
      'model/ProductImpression',
      'model/ProfileEvent',
      'model/Promotion',
      'model/PromotionAction',
      'model/PushMessageEvent',
      'model/PushRegistrationEvent',
      'model/ScreenViewEvent',
      'model/SessionEndEvent',
      'model/SessionStartEvent',
      'model/ShoppingCart',
      'model/SourceInformation',
      'model/UserIdentities',
      'model/BatchContext',
      'model/DataPlanContext',
      'api/EventsApi',
      'api/Configuration'
    ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(
      require('./ApiClient'),
      require('./model/ApiResponse'),
      require('./model/ApiResponseErrors'),
      require('./model/AppEvent'),
      require('./model/ApplicationInformation'),
      require('./model/ApplicationStateTransitionEvent'),
      require('./model/AttributionInfo'),
      require('./model/Batch'),
      require('./model/BreadcrumbEvent'),
      require('./model/CCPAConsentState'),
      require('./model/ConsentState'),
      require('./model/CommerceEvent'),
      require('./model/CrashReportEvent'),
      require('./model/DeviceCurrentState'),
      require('./model/DeviceInformation'),
      require('./model/EventBase'),
      require('./model/EventData'),
      require('./model/FirstRunEvent'),
      require('./model/GDPRConsentState'),
      require('./model/GeoLocation'),
      require('./model/MediaInfo'),
      require('./model/NetworkPerformanceEvent'),
      require('./model/OptOutEvent'),
      require('./model/Product'),
      require('./model/ProductAction'),
      require('./model/ProductImpression'),
      require('./model/ProfileEvent'),
      require('./model/Promotion'),
      require('./model/PromotionAction'),
      require('./model/PushMessageEvent'),
      require('./model/PushRegistrationEvent'),
      require('./model/ScreenViewEvent'),
      require('./model/SessionEndEvent'),
      require('./model/SessionStartEvent'),
      require('./model/ShoppingCart'),
      require('./model/SourceInformation'),
      require('./model/UserIdentities'),
      require('./model/BatchContext'),
      require('./model/DataPlanContext'),
      require('./api/EventsApi'),
      require('./api/Configuration')
    );
  }
})(function(
  ApiClient,
  ApiResponse,
  ApiResponseErrors,
  AppEvent,
  ApplicationInformation,
  ApplicationStateTransitionEvent,
  AttributionInfo,
  Batch,
  BreadcrumbEvent,
  CCPAConsentState,
  ConsentState,
  CommerceEvent,
  CrashReportEvent,
  DeviceCurrentState,
  DeviceInformation,
  EventBase,
  EventData,
  FirstRunEvent,
  GDPRConsentState,
  GeoLocation,
  MediaInfo,
  NetworkPerformanceEvent,
  OptOutEvent,
  Product,
  ProductAction,
  ProductImpression,
  ProfileEvent,
  Promotion,
  PromotionAction,
  PushMessageEvent,
  PushRegistrationEvent,
  ScreenViewEvent,
  SessionEndEvent,
  SessionStartEvent,
  ShoppingCart,
  SourceInformation,
  UserIdentities,
  BatchContext,
  DataPlanContext,
  EventsApi,
  Configuration
) {
  'use strict';

  /**
   * mParticle_Event_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var MParticle = require('index'); // See note below*.
   * var xxxSvc = new mParticle.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new mParticle.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new mParticle.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new mParticle.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse: ApiResponse,
    /**
     * The ApiResponseErrors model constructor.
     * @property {module:model/ApiResponseErrors}
     */
    ApiResponseErrors: ApiResponseErrors,
    /**
     * The AppEvent model constructor.
     * @property {module:model/AppEvent}
     */
    AppEvent: AppEvent,
    /**
     * The ApplicationInformation model constructor.
     * @property {module:model/ApplicationInformation}
     */
    ApplicationInformation: ApplicationInformation,
    /**
     * The ApplicationStateTransitionEvent model constructor.
     * @property {module:model/ApplicationStateTransitionEvent}
     */
    ApplicationStateTransitionEvent: ApplicationStateTransitionEvent,
    /**
     * The AttributionInfo model constructor.
     * @property {module:model/AttributionInfo}
     */
    AttributionInfo: AttributionInfo,
    /**
     * The Batch model constructor.
     * @property {module:model/Batch}
     */
    Batch: Batch,
    /**
     * The BreadcrumbEvent model constructor.
     * @property {module:model/BreadcrumbEvent}
     */
    BreadcrumbEvent: BreadcrumbEvent,
    /**
     * The CCPAConsentState model constructor.
     * @property {module:model/CCPAConsentState}
     */
    CCPAConsentState: CCPAConsentState,
    /**
     * The ConsentState model constructor
     * @property {module:model/ConsentState}
     */
    ConsentState: ConsentState,
    /**
     * The CommerceEvent model constructor.
     * @property {module:model/CommerceEvent}
     */
    CommerceEvent: CommerceEvent,
    /**
     * The CrashReportEvent model constructor.
     * @property {module:model/CrashReportEvent}
     */
    CrashReportEvent: CrashReportEvent,
    /**
     * The DeviceCurrentState model constructor.
     * @property {module:model/DeviceCurrentState}
     */
    DeviceCurrentState: DeviceCurrentState,
    /**
     * The DeviceInformation model constructor.
     * @property {module:model/DeviceInformation}
     */
    DeviceInformation: DeviceInformation,
    /**
     * The EventBase model constructor.
     * @property {module:model/EventBase}
     */
    EventBase: EventBase,
    /**
     * The EventData model constructor.
     * @property {module:model/EventData}
     */
    EventData: EventData,
    /**
     * The FirstRunEvent model constructor.
     * @property {module:model/FirstRunEvent}
     */
    FirstRunEvent: FirstRunEvent,
    /**
     * The GDPRConsentState model constructor.
     * @property {module:model/GDPRConsentState}
     */
    GDPRConsentState: GDPRConsentState,
    /**
     * The GeoLocation model constructor.
     * @property {module:model/GeoLocation}
     */
    GeoLocation: GeoLocation,
    /**
     * The MediaInfo model constructor.
     * @property {module:model/MediaInfo}
     */
    MediaInfo: MediaInfo,
    /**
     * The NetworkPerformanceEvent model constructor.
     * @property {module:model/NetworkPerformanceEvent}
     */
    NetworkPerformanceEvent: NetworkPerformanceEvent,
    /**
     * The OptOutEvent model constructor.
     * @property {module:model/OptOutEvent}
     */
    OptOutEvent: OptOutEvent,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductAction model constructor.
     * @property {module:model/ProductAction}
     */
    ProductAction: ProductAction,
    /**
     * The ProductImpression model constructor.
     * @property {module:model/ProductImpression}
     */
    ProductImpression: ProductImpression,
    /**
     * The ProfileEvent model constructor.
     * @property {module:model/ProfileEvent}
     */
    ProfileEvent: ProfileEvent,
    /**
     * The Promotion model constructor.
     * @property {module:model/Promotion}
     */
    Promotion: Promotion,
    /**
     * The PromotionAction model constructor.
     * @property {module:model/PromotionAction}
     */
    PromotionAction: PromotionAction,
    /**
     * The PushMessageEvent model constructor.
     * @property {module:model/PushMessageEvent}
     */
    PushMessageEvent: PushMessageEvent,
    /**
     * The PushRegistrationEvent model constructor.
     * @property {module:model/PushRegistrationEvent}
     */
    PushRegistrationEvent: PushRegistrationEvent,
    /**
     * The ScreenViewEvent model constructor.
     * @property {module:model/ScreenViewEvent}
     */
    ScreenViewEvent: ScreenViewEvent,
    /**
     * The SessionEndEvent model constructor.
     * @property {module:model/SessionEndEvent}
     */
    SessionEndEvent: SessionEndEvent,
    /**
     * The SessionStartEvent model constructor.
     * @property {module:model/SessionStartEvent}
     */
    SessionStartEvent: SessionStartEvent,
    /**
     * The ShoppingCart model constructor.
     * @property {module:model/ShoppingCart}
     */
    ShoppingCart: ShoppingCart,
    /**
     * The SourceInformation model constructor.
     * @property {module:model/SourceInformation}
     */
    SourceInformation: SourceInformation,
    /**
     * The UserIdentities model constructor.
     * @property {module:model/UserIdentities}
     */
    UserIdentities: UserIdentities,
    /**
     * The BatchContext model constructor.
     * @property {module:model/BatchContext}
     */
    BatchContext: BatchContext,
    /**
     * The DataPlanContext model constructor.
     * @property {module:model/DataPlanContext}
     */
    DataPlanContext: DataPlanContext,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi,

    /**
     * The Configuration service constructor
     * @property {module:api/Configuration}
     */
    Configuration: Configuration
  };

  return exports;
});

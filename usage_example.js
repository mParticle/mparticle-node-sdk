#!/usr/bin/env node

var mParticle = require('./src/mparticle.js');
var batch = new mParticle.Batch(mParticle.Batch.Environment.development);

var appEvent = new mParticle.AppEvent();
appEvent.event_name = 'Test App Event';
appEvent.custom_event_type = 'other';
appEvent.custom_flags = {
  foo: 'bar',
  answer: 42,
  arrays: ['foo', 'bar', 'baz']
};

var session_start = new mParticle.SessionStartEvent();
session_start.session_id = 12345678;
session_start.timestamp_unixtime_ms = 1552679728376;
batch.addEvent(session_start);

var user_identities = new mParticle.UserIdentities();
user_identities.customerid = '123456';
batch.user_identities = user_identities;

var device_info = new mParticle.DeviceInformation();
// set any IDs that you have for this user
device_info.ios_advertising_id = '07d2ebaa-e956-407e-a1e6-f05f871bf4e2';
device_info.android_advertising_id = 'a26f9736-c262-47ea-988b-0b0504cee874';
device_info.att_timestamp_unixtime_ms = 1552679728376;
device_info.att_authorization_status = mParticle.DeviceInformation.ATTAuthorizationStatus.authorized;
batch.device_info = device_info;

// arbitrary example allowing you to create a segment of users trial users
batch.user_attributes = { 'Account type': 'trial', TrialEndDate: '2016-12-01' };

var screen_view_event = new mParticle.ScreenViewEvent();
screen_view_event.screen_name = 'Test Screen View Event';
screen_view_event.custom_flags = {
  foo: 'bar',
  answer: 42,
  arrays: ['foo', 'bar', 'baz']
};

var event = new mParticle.AppEvent(
  mParticle.AppEvent.CustomEventType.navigation,
  'Hello World'
);

batch.addEvent(event);

var product = new mParticle.Product();
product.name = 'Example Product';
product.id = 'sample-sku';
product.price = 19.99;

var product_action = new mParticle.ProductAction('purchase');
product_action.products = [product];
product_action.tax_amount = 1.5;
product_action.total_amount = 21.49;

var ccpa_consent_state = new mParticle.CCPAConsentState(
  'document_agreement.v3',
  true,
  Date.now(),
  'mparticle.test/signup',
  'IDFA:3f90np3n-3108-nee2-90xd-a30bd9pb04pd'
);

var gdpr_consent_state = new mParticle.GDPRConsentState(
  'document_agreement.v2',
  true,
  Date.now(),
  'dtmgbank.com/signup',
  'IDFA:a5d934n0-232f-4afc-2e9a-3832d95zc702'
);

var consent_state = new mParticle.ConsentState();
consent_state.gdpr = { document_agreement: gdpr_consent_state };
consent_state.ccpa = { data_sale_opt_out: ccpa_consent_state };

batch.consent_state = consent_state;

var commerce_event = new mParticle.CommerceEvent();
commerce_event.product_action = product_action;
commerce_event.timestamp_unixtime_ms = 1552679728376; //replace with time of transaction
commerce_event.custom_flags = {
  foo: 'bar',
  answer: 42,
  arrays: ['foo', 'bar', 'baz']
};

batch.addEvent(commerce_event);

session_end = new mParticle.SessionEndEvent();
session_end.session_id = session_start.session_id; // it's mandatory that these match
session_end.session_duration_ms = 10000;
session_end.timestamp_unixtime_ms = 1552679728376 + 10000;

batch.addEvent(session_end);

var api = new mParticle.EventsApi(
  new mParticle.Configuration('REPLACE WITH API KEY', 'REPLACE WITH API SECRET')
);

batch.user_identities = new mParticle.UserIdentities();
batch.user_identities.customerid = '123456'; // identify the user (required)

batch.user_attributes = { 'hair color': 'brown' };

batch.mpid = 600868121729048600;
batch.mp_deviceid = '59780f39-d7a0-4ebe-9950-280f937c29e2';
var data_plan = new mParticle.DataPlanContext();
data_plan.plan_id = 'docsite_v3_test';
data_plan.plan_version = 1;
var batch_context = new mParticle.BatchContext();
batch_context.data_plan = data_plan;
batch.context = batch_context;

var body = [batch]; // {[Batch]} Up to 100 Batch objects

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};

api.bulkUploadEvents(body, callback);

// or upload a single batch
//api.uploadEvents(body, batch)

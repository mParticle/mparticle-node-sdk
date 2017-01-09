# mParticle.EventsApi

All URIs are relative to *https://s2s.mparticle.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkUploadEvents**](EventsApi.md#bulkUploadEvents) | **POST** /bulkevents | Send events to mParticle
[**uploadEvents**](EventsApi.md#uploadEvents) | **POST** /events | Send events to mParticle


<a name="bulkUploadEvents"></a>
# **bulkUploadEvents**
> bulkUploadEvents(body)

Send events to mParticle



### Example
```javascript
var mParticle = require('mParticle');
var defaultClient = mParticle.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new mParticle.EventsApi();

var body = [new mParticle.Batch()]; // [Batch] | Up to 100 Batch objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.bulkUploadEvents(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Batch]**](Batch.md)| Up to 100 Batch objects |

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json

<a name="uploadEvents"></a>
# **uploadEvents**
> uploadEvents(body)

Send events to mParticle



### Example
```javascript
var mParticle = require('mParticle');
var defaultClient = mParticle.ApiClient.default;

// Configure HTTP basic authorization: basic
var basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

var apiInstance = new mParticle.EventsApi();

var body = new mParticle.Batch(); // Batch | Batch of event data


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.uploadEvents(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Batch**](Batch.md)| Batch of event data |

### Return type

null (empty response body)

### Authorization

[basic](../README.md#basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json

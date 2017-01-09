<img src="http://static.mparticle.com/sdk/logo.svg" width="280">

## mParticle Node SDK

This is the mParticle Node SDK - use it to send your data to the [mParticle platform](https://www.mparticle.com/) and off to 100+ data services.

### Requirements

Node JS 4.2.2 or later.

### Installation

```sh
npm install mparticle
```

## Usage

```javascript
var mParticle = require('mparticle');

var api = new mParticle.EventsApi(new mParticle.Configuration(
    'REPLACE WITH API KEY', 
    'REPLACE WITH API SECRET'));

var batch = new mParticle.Batch(mParticle.Batch.Environment.development);

batch.user_identities = new mParticle.UserIdentities();
batch.user_identities.customerid = '123456' // identify the user (required)

batch.user_attributes = {'hair color': 'brown'}

var event = new mParticle.AppEvent(mParticle.AppEvent.CustomEventType.navigation, 
  'Hello World');

batch.addEvent(event);

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

```

### License

[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)

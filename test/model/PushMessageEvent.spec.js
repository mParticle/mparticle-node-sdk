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
    // AMD.
    define(['expect.js', '../../src/mparticle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/mparticle'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.mParticle);
  }
}(this, function(expect, mParticle) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new mParticle.PushMessageEvent();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PushMessageEvent', function() {
    it('should create an instance of PushMessageEvent', function() {
      var instance = new mParticle.PushMessageEvent();
      expect(instance).to.be.a(mParticle.PushMessageEvent);
    });

    it('should have the property pushMessageToken (base name: "push_message_token")', function() {
      var instance = new mParticle.PushMessageEvent('push_message_token');
      expect(instance.push_message_token).to.be('push_message_token');
    });

    it('should have the property pushMessageType (base name: "push_message_type")', function() {
      var instance = new mParticle.PushMessageEvent(null, mParticle.PushMessageEvent.PushMessageType.sent);
      expect(instance.push_message_type).to.be(mParticle.PushMessageEvent.PushMessageType.sent);
    });

    it('should have the property pushNotificationPayload (base name: "push_notification_payload")', function() {
      var instance = new mParticle.PushMessageEvent(null, null, 'push_notification_payload');
      expect(instance.push_notification_payload).to.be('push_notification_payload');
    });

    it('should have the property applicationState (base name: "application_state")', function() {
      var instance = new mParticle.PushMessageEvent(null, null, null, mParticle.PushMessageEvent.ApplicationState.not_running);
      expect(instance.application_state).to.be(mParticle.PushMessageEvent.ApplicationState.not_running);
    });

    it('should have the event type push_message', function() {
      var instance = new mParticle.PushMessageEvent();
      expect(instance.getEventType()).to.be('push_message');
    });

  });

}));

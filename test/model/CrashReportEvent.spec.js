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
    instance = new mParticle.CrashReportEvent();
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

  describe('CrashReportEvent', function() {
    it('should create an instance of CrashReportEvent', function() {
      var instance = new mParticle.CrashReportEvent();
      expect(instance).to.be.a(mParticle.CrashReportEvent);
    });

    it('should have the property className (base name: "class_name")', function() {
      var instance = new mParticle.CrashReportEvent('class_name');
      expect(instance.class_name).to.be('class_name');
    });

    it('should have the property message (base name: "message")', function() {
      var instance = new mParticle.CrashReportEvent(null, 'message');
      expect(instance.message).to.be('message');
    });

    it('should have the property stackTrace (base name: "stack_trace")', function() {
      var instance = new mParticle.CrashReportEvent(null, null, 'stack_trace');
      expect(instance.stack_trace).to.be('stack_trace');
    });

    it('should have the property exceptionHandled (base name: "exception_handled")', function() {
      var instance = new mParticle.CrashReportEvent(null, null, null, true);
      expect(instance.exception_handled).to.be(true);
    });

    it('should have the event type application_state_transition', function() {
      var instance = new mParticle.CrashReportEvent();
      expect(instance.getEventType()).to.be('crash_report');
    });

  });

}));

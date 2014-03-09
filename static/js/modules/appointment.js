define([
  'jquery',
  'backbone',
  'marionette',
],
function($, Backbone, Marionette) {
  'use strict';

  var Appointment = Backbone.Model.extend({
    url: 'api/v1/appointment'
  });
  return Appointment;  
});
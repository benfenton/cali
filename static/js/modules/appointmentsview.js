define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'mustache',
  'marionette_mustache',
  //'text!templates/templateView.html',
  'modules/appointments',
  'modules/appointmentview',
  //'modules/appointmentmodules',
],
function($, _, Backbone, Marionette, vent, t, Mustache, MM, Appointments, AppointmentView) {
  'use strict';

  var AppointmentsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    
    itemView: AppointmentView
  });
  return AppointmentsView;
});
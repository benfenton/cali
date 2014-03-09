define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'mustache',
  'marionette_mustache',
  'text!templates/templateview.mustache',
  'modules/appointment',
],
function($, _, Backbone, Marionette, vent, t, Mustache, MM, appointmentsViewTemplate,
  Appointment) {
  
    var AppointmentView = Marionette.ItemView.extend({
      tagName:'li',

      template: appointmentsViewTemplate
    });
  return AppointmentView;
});
 
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'app',
  'vent',
  'router',
  'controller',
  'text',
  'mustache',
  'marionette_mustache',
  'text!templates/addappointmentview.mustache',
  'modules/appointment',
  'modules/appointments',
  'app',
],
function($, _, Backbone, Marionette, app, vent, Router, Controller, t, 
         Mustache, MM, addAppointmentViewTemplate, Appointment, Appointments, app) {

  var addAppointmentView = Backbone.Marionette.ItemView.extend({
    
    template: addAppointmentViewTemplate,

    events: {
      'submit': 'addAppointment',
      'keypress #title': 'createOnEnter'
    },
    createOnEnter: function(e) {
      if((e.keyCode || e.which) == 13){
        this.addAppointment();
        e.preventDefault();
      }
    },
    addAppointment: function(e) {
      e.preventDefault();
      var title = this.$('#title').val()
      if(title){
        this.collection.create({
          title: title
        });
        this.$('#message').val('');
        vent.trigger('show:appointments');
      }
    },
    onRender: function() { 
    }
  });
  return addAppointmentView;
});
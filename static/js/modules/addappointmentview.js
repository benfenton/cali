 
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
 // 'modules/appointmentmodules',
],
function($, _, Backbone, Marionette, app, vent, 
  Router, Controller, t, Mustache, MM, addAppointmentViewTemplate, Appointment, Appointments, app) {

  var addAppointmentView = Backbone.Marionette.ItemView.extend({
    //el: '#main',
    
    template: addAppointmentViewTemplate,

    initialize: function() {
      
      

      //console.log(this.model.attributes);
      //console.log(this.model.toJSON());
   
  //  this.render();
      this.title = $('#title');
    
    
      
  //  this.date = $('#date');
      
    },
  //
    events: {
      'submit': 'addAppointment'
    },

    addAppointment: function (e) {
      e.preventDefault();
      this.collection.create({
      title: this.title.val()
      



    
  //    date: this.date.val(),
      }, { wait: true });

      this.clearForm();
    },

  //render: function() {
  //  var html = this.template();
  //  this.$el.html(html); 
  //  return this;
  //},

    clearForm: function () {
      this.title.val('');
  //  this.date.val('');
    }
  });
  return addAppointmentView;
});
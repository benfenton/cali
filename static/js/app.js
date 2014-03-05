define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'modules/appointment',
  'modules/appointments',
  'modules/appointmentsview',
  'modules/addappointmentview',
],
function($, _, Backbone, Marionette, vent, t, Appointment, Appointments, appointmentsView, addAppointmentView) {
  'use strict';


  
  var app = new Marionette.Application();
  

  app.addRegions({
    mainContent: '#mainContent'
  });

  app.addInitializer(function() {

    vent.on('show:appointments', function(x) {
      console.log("show:appointments");
      Backbone.history.navigate("appointments");
      app.mainContent.show(new appointmentsView());
    });

    vent.on('show:create', function(x) {
      console.log("show:create");
      Backbone.history.navigate("create");
      app.mainContent.show(new addAppointmentView());
    });

    app.vent.on("routing:started", function() {
      alert("routing:started");
      console.log(Backbone.History.started);
      if( ! Backbone.History.started)
        Backbone.history.start({pushState: true});
      console.log(Backbone.History.started);
      console.log("show:appointments");
      Backbone.history.navigate("appointments");
      appointments = new Appointments();
      //app.mainContent.show(new appointmentView({ collection: appointments }));
      appointments.fetch({
        reset: true,
        success: function() {
         // console.log(appointments.toJSON());

          app.mainContent.show(new appointmentsView({ collection: appointments }));
        }
      });
    });

  });
  return app; 
});
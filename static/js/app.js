define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'modules/appointments',
  'modules/appointmentview',
  'modules/addappointmentview',
],
function($, _, Backbone, Marionette, vent, t, Appointments, appointmentView, addAppointmentView) {
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
          app.mainContent.show(new appointmentView({ collection: appointments }));
        }
      });
    });

  });
  return app; 
});
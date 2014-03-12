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
  'modules/loggedinview', 
  'controller',
],
function($, _, Backbone, Marionette, vent, t, Appointment, Appointments, 
         appointmentsView, addAppointmentView, loggedinView, Controller) {
  'use strict';


  
  var app = new Marionette.Application();
  

  app.addRegions({
    mainNav: '#mainNav',
    mainContent: '#mainContent'
  });

  app.addInitializer(function() {

    vent.on("show:appointments", function() {
      console.log("show:appointments");
      Backbone.history.navigate("");
      //app.mainContent.show(new appointmentsView());
      var appointments = new Appointments();
      //app.mainContent.show(new appointmentsView({ collection: appointments }));
      appointments.fetch({
        reset: true,
        success: function() {
          app.mainContent.show(new appointmentsView({ collection: appointments }));
        }
      });
    });

    vent.on("show:create", function() {
      console.log("show:create");
      Backbone.history.navigate("create");
      var appointments = new Appointments();
      app.mainContent.show(new addAppointmentView({ collection: appointments }));
    });

    vent.on("show:loggedin", function() {
      console.log("show:loggedin");
      Backbone.history.navigate("");
      app.mainNav.show(new loggedinView());
    });

    vent.on("routing:started", function() {
      console.log("routing:started");
      console.log(Backbone.History.started);
      if( ! Backbone.History.started)
        Backbone.history.start({ pushState: true });
      console.log(Backbone.History.started);
      console.log("hello you are loggedin");
      Backbone.history.navigate("");
      vent.trigger("show:loggedin");
      vent.trigger("show:appointments");
      
    });

  });
  return app; 
});
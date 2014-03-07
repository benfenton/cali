define([
  'jquery',
  'backbone',
  'marionette',
  'vent',
],
function($, Backbone, Marionette, vent) {

  var Controller = {

    showLoggedin: function(params) {
      console.log('controller:showLoggedin');
      vent.trigger("show:loggedin");
    },
    showAppointments : function(params) {
      console.log('controller:showAppointments');
      vent.trigger("show:appointments");
    },
    showCreate: function(params) {
      console.log('conntroller:showCreate');
      vent.trigger("show:create");
    }
  };
 return Controller; 
});
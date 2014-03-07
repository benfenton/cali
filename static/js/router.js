define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'controller',
  'text',
  'vent',
],
function($, _, Backbone, Marionette, Controller, t, vent){

  var Router = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      '':'showLoggedin',
      'appointments':'showAppointments',
      'create':'showCreate'
    }
  
    //showLoggedin: function() {
    //console.log('controller:showLoggedin');
    //vent.trigger("show:loggedin");
    //},
    //showAppointments : function() {
    //console.log('controller:showAppointments');
    // vent.trigger("show:appointmets");
    //},
    //showCreate: function() {
    //console.log('conntroller:showCreate');
    //vent.trigger("show:create");
    //}
  });
  return Router;
});
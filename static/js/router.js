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
      '':'showAppointments',
      'create':'showCreate'
    }
  });
  return Router;
});
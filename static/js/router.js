define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'text',
],
function($, _, Backbone, Marionette, t){

  return Marionette.AppRouter.extend({
    appRoutes: {
      'appointments':'showAppointments',
      'create':'showCreate',
    },
    initalize: function() {
      console.log('in the router init');
    }
  });
});
define([
  'jquery',
  'underscore',
  'backbone',
  'modules/events',
  'modules/eventsview',
],
function($, _, Backbone, Events, EventsView){
  var Router = Backbone.Router.extend({
    routes: {
      '':'showCalendar',
      'create':'showCreate'
    },
    showCalendar: function() {
      console.log('showCalendar Function');
      var events = new Events();
      events.fetch({ reset: true });
      new EventsView({ collection: events }).render();
    },
    showCreate: function() {
    }
  });
  return Router;
});
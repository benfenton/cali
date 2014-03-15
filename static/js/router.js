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
      new EventsView({ collection: events }).render();
      events.fetch({ reset: true });
    },
    showCreate: function() {
    }
  });
  return Router;
});
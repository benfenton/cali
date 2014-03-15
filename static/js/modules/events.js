define([
  'jquery',
  'underscore',
  'backbone',
  'modules/event',
],
function($, _, Backbone, Event){
  var Events = Backbone.Collection.extend({
    model: Event,
    url: '/api/v1/event',
    parse: function(response) {
      return response.objects;
    }
  });
  return Events;
});
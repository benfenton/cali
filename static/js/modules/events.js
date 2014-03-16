define([
  'jquery',
  'underscore',
  'backbone',
  'modules/event',
],
function($, _, Backbone, Event){
  var Events = Backbone.Collection.extend({
    model: Event,
    url: 'backbone:eventapp_event'//,
    //parse: function(response) {
    //  return response.objects;
    //}
  });
  return Events;
});
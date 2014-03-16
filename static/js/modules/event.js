define([
  'jquery',
  'underscore',
  'backbone',
],
function($, _, Backbone){
  var Event = Backbone.Model.extend({
    urlRoot: 'backbone:eventapp_event'
  });
  return Event;
});
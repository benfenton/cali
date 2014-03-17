define([
  'jquery',
  'underscore',
  'backbone',
],
function($, _, Backbone){
  var Event = Backbone.Model.extend({
    urlRoot: "/api/v1/event"
  });
  return Event;
});
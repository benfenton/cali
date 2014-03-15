define([
  'jquery',
  'underscore',
  'backbone',
],
function($, _, Backbone){
  var Event = Backbone.Model.extend({
    //url: '/api/v1/event'
  });
  return Event;
});
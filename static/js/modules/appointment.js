define([
  'jquery',
  'backbone',
  'marionette',
],
function($, Backbone, Marionette) {
  'use strict';

  var Appointment = Backbone.Model.extend({
    url: 'api/v1/appointment',

    initialize: function() {
      // save link to promise
      this.deferred = this.fetch();
      //this.fetch({context: this}).done(function() {
      //  console.log(this.toJSON());
      //  console.log(this.get('title'));
      //});
    }
    
  });
  return Appointment;  
});
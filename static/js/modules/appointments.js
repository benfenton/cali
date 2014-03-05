define([
  'jquery',
  'backbone',
  'marionette',
  'modules/appointment',
],
function($, Backbone, Marionette, Appointment) {
  'use strict';

  var Appointments = Backbone.Collection.extend({
    model: Appointment,
    
    url: '/api/v1/appointment/?format=json',

    parse: function(response) {
        return response.objects;
    }

    //maybeFetch: function(options){
    //        alert("Appointments:maybeFetch");
    //        // Helper function to fetch only if this collection has not been fetched before.
    //        if(this._fetched){
    //            // If this has already been fetched, call the success, if it exists
    //            options.success && options.success();
    //            return;
    //        }
//
    //        // when the original success function completes mark this collection as fetched
    //        var self = this,
    //            successWrapper = function(success){
    //                return function(){
    //                    self._fetched = true;
    //                    success && success.apply(this, arguments);
    //                };
    //            };
    //        options.success = successWrapper(options.success);
    //        this.fetch(options);
    //    },
//
    //    getOrFetch: function(id, options){
    //        alert("Appointments:getOrFetch");
    //        // Helper function to use this collection as a cache for models on the server
    //        var model = this.get(id);
//
    //        if(model){
    //            options.success && options.success(model);
    //            return;
    //        }
//
    //        model = new Appointment({
    //            resource_uri: id
    //        });
//
    //        model.fetch(options);
    //   }
  });
  return Appointments;
});
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'app',
  'vent',
  'router',
  'controller',
  'text',
  'mustache',
  'marionette_mustache',
  'text!templates/loggedinView.mustache',
  'app',
],
function($, _, Backbone, Marionette, app, vent, 
         Router, Controller, t, Mustache, MM, loggedinViewTemplate, app) {
  
    var loggedinView = Backbone.Marionette.ItemView.extend({
      
      template: loggedinViewTemplate,

     
      events: {
        "click a.link": "showDem",
        "click a.create": "createDem"
      },

      showDem: function(e) {
        e.preventDefault();
        console.log('Showing Dem'); 
        vent.trigger('show:appointments');
      },

      createDem: function(e) {
        e.preventDefault();
        console.log('Creating Dem');
        vent.trigger('show:create');
      }
    });
  return loggedinView;
});
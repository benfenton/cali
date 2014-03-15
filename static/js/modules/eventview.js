define([
  'jquery',
  'underscore',
  'backbone',
  'text',

  'modules/eventsview',
],
function($, _, Backbone, t, EventsView){
  var EventView = Backbone.View.extend({
    el: '#eventDialog',
    initialize: function() {
      _.bindAll(this); 
    },
    render: function() {
      this.$el.dialog({
        modal: true,
        title: 'New Event',
        buttons: {     'OK': this.save,
                   'Cancel': this.close 
        }
      });
      return this;
    },
    save: function() {
      this.model.set({ 'title': this.$('#title').val(), 'color': this.$('#color').val() });
      this.collection.create(this.model, { success: this.close() });  
    },
    close: function() {
      this.$el.dialog('close');
    }
  });
  return EventView;
});
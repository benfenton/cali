define([
  'jquery',
  'underscore',
  'backbone',
  'modules/eventsview',
],
function($, _, Backbone, EventsView){
  var EventView = Backbone.View.extend({
    el: '#eventDialog',
    initialize: function() {
      _.bindAll(this); 
    },
    render: function() {
      var buttons = { 'OK': this.save };
      if(!this.model.isNew()) {
        _.extend(buttons, { 'Delete': this.destroy });
      }
      _.extend(buttons, { 'Cancel': this.close }); 
    
      this.$el.dialog({
        modal: true,
        title: (this.model.isNew() ? 'New' : 'Edit') + 'Event',
        buttons: buttons,
        open: this.open
      });
      return this;
    },
    open: function() {
      this.$('#title').val(this.model.get('title'));
      this.$('#color').val(this.model.get('color'));
    },
    save: function() {
      this.model.set({ 'title': this.$('#title').val(), 'color': this.$('#color').val() });

      if(this.model.isNew()) {
        this.collection.create(this.model, { success:  this.close() });
        
      } else {
        this.model.save({}, { success: this.close });
      }
    },
    close: function() {
      this.$el.dialog('close');
    },
    destroy: function() {
      this.model.destroy({ success: this.close });
    }
  });
  return EventView;
});
define([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'modules/event',
  'modules/eventview',
],
function($, _, Backbone, t, Event, EventView){
  var EventsView = Backbone.View.extend({
    el: '#calendar',

    initialize: function(){
      _.bindAll(this);

      this.collection.bind('reset', this.addAll);
      this.collection.bind('add', this.addOne);
    },
    render: function(){
      this.$el.fullCalendar({
        header: {
          left: 'prev, next, today',
          center: 'title',
          right: 'month, basicWeek, basicDay',
          ignoreTimezone: false
        },
        selectable: true,
        selectHelper: true,
        editable: true,
        select: this.select
      });
    },
    select: function(startDate, endDate) {
      var eventView = new EventView();
      eventView.collection = this.collection;
      eventView.model = new Event({ start: startDate, end: endDate });
      eventView.render();
    },
    addAll: function(){
      this.$el.fullCalendar('addEventSource', this.collection.toJSON());
    },
    addOne: function(event){
      this.$el.fullCalendar('renderEvent', event.toJSON());
    }
  });
  return EventsView;
});
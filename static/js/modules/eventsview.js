define([
  'jquery',
  'underscore',
  'backbone',
  'modules/event',
  'modules/eventview',
],
function($, _, Backbone, Event, EventView){
  var EventsView = Backbone.View.extend({
    el: '#calendar',

    initialize: function(){
      _.bindAll(this);

      this.collection.on('reset', this.addAll);
      this.collection.on('add', this.addOne);
      this.collection.on('change', this.change);
      this.collection.on('destroy', this.destroy);
      this.collection.on('create', this.message);
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
        select: this.select,
        eventClick: this.eventClick,
        eventDrop: this.eventDropOrResize,
        eventResize: this.eventDropOrResize
      });
    },
    select: function(startDate, endDate) {
      var eventView = new EventView();
      eventView.collection = this.collection;
      eventView.model = new Event({ start: startDate, end: endDate });
      eventView.render();
      return eventView;
    },
    eventClick: function(fcEvent) {
      var eventView = new EventView();
      eventView.model = this.collection.get(fcEvent.id);
      eventView.render();
    },
    eventDropOrResize: function(fcEvent) {
      this.collection.get(fcEvent.id).save({ start: fcEvent.start, end: fcEvent.end});
    },
    addAll: function(){
      this.$el.fullCalendar('addEventSource', this.collection.toJSON());
    },
    addOne: function(event){
      this.$el.fullCalendar('renderEvent', event.toJSON());
    },
    change: function(event) {
      var fcEvent = this.$el.fullCalendar('clientEvents', event.get('id'))[0];
      fcEvent.title = event.get('title');
      fcEvent.color = event.get('color');
      this.$el.fullCalendar('updateEvent', fcEvent);
    },
    destroy: function(event) {
      this.$el.fullCalendar('removeEvents', event.id);
    },
    message: function() {
      console.log('i can hear that the collection has been created in the event view');
    }
  });
  return EventsView;
});
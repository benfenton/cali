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
      _.bindAll(this, "render", "select", "eventClick", "eventDropOrResize",
                      "addAll", "addOne", "change", "destroy");

      this.collection.on('reset', this.addAll);
      this.collection.on('add', this.addOne);
      this.collection.on('change', this.change);
      this.collection.on('destroy', this.destroy);
      
      this.eventView = new EventView();
    },
    render: function(){
      this.$el.fullCalendar({
        header: {
          left: 'prev, next, today',
          center: 'title',
          right: 'month, basicWeek, basicDay'

        },
        selectable: true,
        selectHelper: true,
        editable: true,
        ignoreTimezone: false,
        select: this.select,
        eventClick: this.eventClick,
        eventDrop: this.eventDropOrResize,
        eventResize: this.eventDropOrResize

      });
    },
    select: function(startDate, endDate) {
      this.eventView.collection = this.collection;
      this.eventView.model = new Event({ start: startDate, end: endDate });
      this.eventView.render();
    },
    eventClick: function(fcEvent) {
      this.eventView.model = this.collection.get(fcEvent.id);
      this.eventView.render();
    },
    eventDropOrResize: function(fcEvent) {
      this.collection.get(fcEvent).save({ start: fcEvent.start, end: fcEvent.end});
    },
    addAll: function(){
      this.$el.fullCalendar('addEventSource', this.collection.toJSON());
    },
    addOne: function(event){
      this.$el.fullCalendar('renderEvent', event.toJSON(), true);
    },
    change: function(event) {
      var fcEvent = this.$el.fullCalendar('clientEvents', event.get('id'))[0];
      fcEvent.title = event.get('title');
      fcEvent.color = event.get('color');
      this.$el.fullCalendar('updateEvent', fcEvent);
    },
    destroy: function(event) {
      this.$el.fullCalendar('removeEvents', event.id);
    }
  });
  return EventsView;
});
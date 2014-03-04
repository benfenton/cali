define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'mustache',
  'marionette_mustache',
  'text!templates/appointments.mustache',
  'modules/appointment',
  'modules/appointmentmodules',
],
function($, _, Backbone, Marionette, vent, t, Mustache, MM, appointmentsViewTemplate,
  Appointment, AppointmentModules) {
  
  var AppointmentView = Backbone.Marionette.ItemView.extend({

    template: appointmentsViewTemplate,
    tagName: "li",

    initialize: function() {
      console.log('itemviewrender');
      

    },
    //render: function() {
//
    //  console.log(this.model.toJSON());
    //  console.log(appointmentsViewTemplate);
    //  this.$el.html(this.template);
    //  return this;
    //}
  });

  var AppointmentsView = Marionette.CollectionView.extend({

    itemView: AppointmentView,

    initialize: function() { 
    //this.collection.on('sync', this.render, this);
      
     
      console.log("appointmentsview:init:"+JSON.stringify(this.collection));
      
      this.render();
      
    },
    events: {

    },
    onRender: function () {

    },
    render: function( item ) {
      console.log('in the collection render');
      this.collection.each(function( item ) {
        this.renderAppointment( item );
      }, this );
    },
    
    renderAppointment: function( item ) {
      console.log('in the renderAppointment funtion');
      var appointmentView = new AppointmentView( { model: item } );
      this.$el.append( appointmentView.render().el );
    }
    
  });
  return AppointmentsView
});
define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'mustache',
  'marionette_mustache',
  //'text!templates/templateView.html',
  'modules/appointments',
  'modules/appointmentview',
  //'modules/appointmentmodules',
],
function($, _, Backbone, Marionette, vent, t, Mustache, MM, Appointments, AppointmentView) {
  'use strict';

  var AppointmentsView = Marionette.CollectionView.extend({
    itemView: AppointmentView,


    initialize: function() { 
       
      this.collection.on('sync', this.render, this);
      
     
      //console.log("appointmentsview:init:"+JSON.stringify(this.collection));
      
      //this.render();
    }
  });
  
  //var AppointmentsView = Backbone.View.extend({
  //  el: '#mainContent',
//
  //  initialize: function() {
  //    console.log('inside the collection view init');
  //  
  //    this.render();
  //    //console.log(JSON.stringify(this.collection));
  //    this.collection.on('change', this.render, this);
  //  },
//
  //  render: function() {
  //    console.log('inside the collection render');
  //    this.collection.each(function( item ) {
  //      this.renderAppointment( item );
  //    }, this );
  //  },
//
  //  renderAppointment: function( item ) {
  //    console.log('inside the collection renderApp');
  //    var appointmentView = new AppointmentView( { model: item } );
  //    this.el.append(appointmentView);
  //  }
  //});
  return AppointmentsView;
});
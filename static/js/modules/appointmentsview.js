//define(function( require, exports, module ) {
//  'use strict';
//
//  var Backbone = require( 'backbone' );
//  var Appointments = require( 'modules/appointments' );
//  var AppointmentView = require( 'modules/appointmentview' );
//
//  module.exports = Backbone.View.extend({
//    el: '#main',
//
//    initialize: function() {
//      this.render();
//      this.collection.on('change', this.render, this);
//    },
//
//    render: function() {
//      this.collection.each(function( item ) {
//        this.renderAppointment( item );
//      }, this );
//    },
//
//    renderAppointment: function( item ) {
//      var appointmentView = new AppointmentView( { model: item } );
//      this.$el.append( appointmentView.render().el );
//    }
//  });
//});//
define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );
  var Appointment = require('modules/appointment');
  var Appointments = require( 'modules/appointments' );
  var AppointmentsView = require( 'modules/appointmentsview' );
  var AddAppointmentsView = require( 'modules/addappointmentview' );


  module.exports = Backbone.Router.extend({
    routes: {
      'appointments/': 'index',
      'add/': 'add'
    },
    initialize: function () {
      
    },

    index: function() {
      appointments = new Appointments();
      appointments.fetch({
        reset: true,
        success: function() {
          appointmentsView = new AppointmentsView({ collection: appointments });
        }
      });
    },
    add: function () {
      appointments = new Appointments();
      appointments.fetch({
        reset: true,
        success: function() {
          addAppointmentsView = new AddAppointmentsView({ collection: appointments });
        }
      });
    }
  });
});

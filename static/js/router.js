define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );
  var Appointments = require( 'modules/appointments' );
  var AppointmentsView = require( 'modules/appointmentsview' );

  module.exports = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    index: function() {
      appointments = new Appointments();
      appointments.fetch({
        reset: true,
        success: function() {
          appointmentsView = new AppointmentsView( { collection: appointments } );
        }
      });
    }  
  });
});

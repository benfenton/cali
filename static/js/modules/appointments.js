define(function( require, exports, module ) {
  'use strict';
  
  var Backbone = require( 'backbone_tastypie' );
  var Appointment = require( 'modules/appointment' );
  
  module.exports = Backbone.Collection.extend({
    model: Appointment,
    urlRoot: '/api/v1/appointment'
  });
});
define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );

  module.exports = Backbone.Model.extend({ 
    urlRoot: '/api/v1/appointment/:id' 
  });  
});
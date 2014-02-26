define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );

  module.exports = Backbone.Model.extend({ 
    attributeId: 'myModelId',
    urlRoot: function() {
      return '/api/v1/appointment';
    },
    initialize: function() {
      defaults: { 
        myModelId: null
      }
    }
  });  
});
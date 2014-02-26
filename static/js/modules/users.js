define(function( require, exports, module ) {
  'use strict';
  
  var Backbone = require( 'backbone_tastypie' );
  var User = require( 'modules/user' );
  
  module.exports = Backbone.Collection.extend({
    model: User,
    urlRoot: '/api/v1/auth/user'
  });
});
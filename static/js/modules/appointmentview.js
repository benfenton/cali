define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );
  
  module.exports = Backbone.View.extend({
    tagName: 'li',  
    className: 'meeting',
    template: _.template( '<%= title %>' + '<span class="delete">X</span>' ),

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });

});
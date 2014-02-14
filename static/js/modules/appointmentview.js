define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );
  var Temp = require('text!templates/templateView.html');
  
  module.exports = Backbone.View.extend({
    tagName: 'li',
    className: 'meeting',
    template: _.template(Temp),

    initialize: function(){
    this.container = $( '#' + d.toJSON() );
    console.log(this.container);
    this.model.on('destroy', this.unrender, this);
    },
    events: {
      'click .delete': 'handleDelete'
    },
    handleDelete: function() {
      this.model.destroy();
      return false;
    },
    render: function() {  
      this.$el.html( this.template( this.model.toJSON() ) );
      this.container.append(this.$el);
      return this;
    },
    unrender: function() {
      this.remove();
    }
  });

});
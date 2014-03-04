//define(function( require, exports, module ) {
//  'use strict';
//
//  var Backbone = require( 'backbone' );
//  var Appointments = require( 'modules/appointments' );
//  var Temp = require('text!templates/addAppointment.html');
//  
//  
//
//
//  module.exports = Backbone.View.extend({
//    el: '#main',
//    
//    template: _.template(Temp),
//
//    initialize: function() {
//
//      this.render();
//      this.title = $('#title');
//      this.date = $('#date');
//    },
//    
//    events: {
//      'submit': 'addAppointment'
//    },
//
//    addAppointment: function (e) {
//      e.preventDefault();
//      this.collection.create({
//        title: this.title.val(),
//        date: this.date.val(),
//      }, { wait: true });
//
//      this.clearForm();
//    },
//
//    render: function() {
//      var html = this.template();
//      this.$el.html(html); 
//      return this;
//    },
//
//    clearForm: function () {
//      this.title.val('');
//      this.date.val('');
//    }
//  });
//});//
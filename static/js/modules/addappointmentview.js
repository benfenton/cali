define(function( require, exports, module ) {
  'use strict';

  var Backbone = require( 'backbone_tastypie' );
  var Appointments = require( 'modules/appointments' );
  var Temp = require('text!templates/addAppointment.html');
  

  module.exports = Backbone.View.extend({
    el: '#main',
    
    template: _.template(Temp),

    initialize: function() {
      //$.ajax to always send an X-CSRFToken header:
     // var csrfToken = $.cookie('csrftoken');
     // console.log(csrfToken);
      //var csrfToken = $('input[name=csrfmiddlewaretoken]').val();
     //
      //$.ajaxSetup({
      //    crossDomain: false,
      //    beforeSend: function(xhr, settings) {
      //        var csrfSafeMethod = function(method) { 
      //            // these HTTP methods do not require CSRF protection
      //            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
      //        };
      //        if (!csrfSafeMethod(settings.type)) {
      //            xhr.setRequestHeader("X-CSRFToken", window.csrftoken);
      //          }
      //      }
      //  });
      
    //  $.ajaxSetup({ 
    //     data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
    //     beforeSend: function(xhr, settings) {
    //       function getCookie(name) {
    //         var cookieValue = null;
    //         if (document.cookie && document.cookie != '') {
    //             var cookies = document.cookie.split(';');
    //             for (var i = 0; i < cookies.length; i++) {
    //                 var cookie = jQuery.trim(cookies[i]);
    //                 // Does this cookie string begin with the name we want?
    //             if (cookie.substring(0, name.length + 1) == (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    //     }
    //     if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
    //         // Only send the token to relative URLs i.e. locally.
    //         xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    //     }
    //   } 
    //});
      this.render();
      this.title = $('#title');
      this.date = $('#date');
    },
    
    events: {
      'submit': 'addAppointment'
    },

    addAppointment: function (e) {
      e.preventDefault();
      this.collection.create({
        title: this.title.val(),
        date: this.date.val(),
      }, { wait: true });

      this.clearForm();
    },

    render: function() {
      var html = this.template();
      this.$el.html(html);
      return this;
    },

    clearForm: function () {
      this.title.val('');
      this.date.val('');
    }
  });
});
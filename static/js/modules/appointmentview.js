define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'vent',
  'text',
  'mustache',
  'marionette_mustache',
  'text!templates/templateView.mustache',
  'modules/appointment',
 // 'modules/appointmentmodules',
],
function($, _, Backbone, Marionette, vent, t, Mustache, MM, appointmentsViewTemplate,
  Appointment) {
  
    var AppointmentView = Marionette.ItemView.extend({
      tagName:'li',
      template: appointmentsViewTemplate
    });
//  var AppointmentView = Backbone.View.extend({
//
//    //_.templateSettings = {
//    //  interpolate : /\{\{(.+?)\}\}/g
//    //};
//
//    template: _.template(appointmentsViewTemplate),
//    tagName: 'li',
//
//    initialize: function() {
//    console.log('in the model init');
//     //console.log(this.model.attributes);
//      
//    
//      this.model.on('change', this.render, this);
//      
//
//    },
//    render: function() {
////
//    //  console.log(this.model.toJSON());
//    //  console.log(appointmentsViewTemplate);
//    //this.model.deferred.done(_.bind(function() {
//    console.log(this.model.get('title'));
//    //}, this));
//    this.$el.html(this.template(this.model.toJSON()));
//    return this;
//    //console.log("in the render function");
//    }
//
//  });
//
  //var AppointmentsView = Marionette.CollectionView.extend({
//
  //  itemView: AppointmentView,
//
  //  initialize: function() { 
  //  //this.collection.on('sync', this.render, this);
  //    
  //   
  //    console.log("appointmentsview:init:"+JSON.stringify(this.collection));
  //    
  //    this.render();
  //    
  //  },
  //  events: {
//
  //  },
  //  onRender: function () {
//
  //  },
  //  render: function( item ) {
  //    console.log('in the collection render');
  //    this.collection.each(function( item ) {
  //      this.renderAppointment( item );
  //    }, this );
  //  },
  //  
  //  renderAppointment: function( item ) {
  //    console.log('in the renderAppointment funtion');
  //    var appointmentView = new AppointmentView( { model: item } );
  //    this.$el.append( appointmentView.render().el );
  //  }
  //  
  //});
  return AppointmentView;
});
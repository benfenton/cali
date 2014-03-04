define([
  'jquery',
  'marionette',
  'vent',
],
function($, Marionette, vent) {

  return  {
    showAppointments : function(param) {
      console.log('controller:showAppointments');
      vent.trigger("show:appointmets");
    },
    showCreate: function(param) {
      console.log('conntroller:showCreate');
      vent.trigger("show:create");
    }
  };
});
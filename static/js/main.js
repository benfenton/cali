require.config({
  paths: {
    vendor: "../../vendor",
    almond: "../../vendor/almond/almond",
    text: "../../vendor/requirejs-text/text",
    jquery: "../../vendor/jquery/jquery",
    underscore: "../../vendor/underscore/underscore",
    backbone: "../../vendor/backbone/backbone",
    fullcalendar: "../../vendor/fullcalendar/fullcalendar.min"
  },
  shim: {
    "underscore": {
      exports: "_"
    },
   
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    //  //init: function (_, $) { Backbone.$ = $; return Backbone; }
    },
    "fullcalendar": {
      deps: ["jquery"],
      exports: "fullcalendar"
    }
  }
});
require([
  'backbone', 'router', 'fullcalendar', 
],
function(Backbone, Router, FullCalendar) {
  new Router();
  console.log(Backbone.History.started);
  if( ! Backbone.History.started)
    Backbone.history.start({ pushState: true, root: '/' });
  console.log(Backbone.History.started);
});
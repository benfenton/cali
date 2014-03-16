require.config({
  paths: {
    vendor: "../../vendor",

    almond: "../../vendor/almond/almond",

    text: "../../vendor/requirejs-text/text",


    jquery: "../../vendor/jquery/jquery",
    //jqueryui: "../../vendor/jquery-ui-amd/jquery-ui-1.10.0/ui/jquery-ui",
    //jqueryui: "../../vendor/jquery-ui-1.9.2/ui/jquery-ui",
    //jqcook: "../../vendor/jquery/jquery.cookie",
    underscore: "../../vendor/lodash/dist/lodash.underscore",

    backbone: "../../vendor/backbone/backbone",
    //backbonetastypie: "../../vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie",
    //handlebars: "../../vendor/handlebars/handlebars",
    //icanhaz: "../../vendor/ich/ICanHaz",
    //tastypiefix: "../../vendor/tastypiefix/backbone.tastypiefix",
    //mustache: "../../vendor/mustache/mustache",
    //syphon: "../../vendor/syphon/backbone.syphon",
    //marionette: "../../vendor/marionette/lib/backbone.marionette",
    //backbonewreqr: "../../vendor/marionette/lib/backbone.wreqr",
    //backbone.eventbinder: "../../vendor/marionette/lib/backbone.eventbinder",
    //backbone.babysitter: "../../vendor/marionette/lib/backbone.babysitter",
    fullcalendar: "../../vendor/fullcalendar/fullcalendar.min"
    //templates: "/static/js/templates"
  },

  shim: {
    "underscore": {
      exports: "_"
    },
   
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
      //init: function (_, $) { Backbone.$ = $; return Backbone; }
    },

   //"marionette": {
   //  deps: ["backbone"],
   //  exports: "Backbone.Marionette"
   //},

    "fullcalendar": {
      deps: ["jquery"],
      exports: "fullcalendar"
    },

    //"jqueryui": {
     // deps: ["jquery"],
     // exports: "jqueryui"
    //}

  
    //"tastypiefix": {
    //  deps: ["backbone"],
    //  exports: "tastypiefix"
    //}
    
   //"backbonetastypie": {
   //deps: ["backbone", "underscore", "jquery"],
   ///attach: "Backbone"
   //}

  }
});

require([
  'backbone', 'router', 'fullcalendar', //'jqueryui',
  //'app', 'vent', 'backbone', 'router', 'controller',
  //'app', 'vent', 'backbone', 'router', 'controller',
],
function(Backbone, Router, FullCalendar) {
  
  //console.log("jquery ui: " + typeof jqui);

  new Router();
  console.log(Backbone.History.started);
  if( ! Backbone.History.started)
    Backbone.history.start({ pushState: true, root: '/' });
  console.log(Backbone.History.started);

  //console.log("Starting routing");
  //vent.trigger("routing:started");
  


});
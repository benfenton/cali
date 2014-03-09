require.config({
  paths: {
    vendor: "../../vendor",

    almond: "../../vendor/almond/almond",

    text: "../../vendor/requirejs-text/text",


    jquery: "../../vendor/jquery/jquery",
    jqcook: "../../vendor/jquery/jquery.cookie",
    underscore: "../../vendor/lodash/dist/lodash.underscore",

    backbone: "../../vendor/backbone/backbone",
    //backbonetastypie: "../../vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie",
    handlebars: "../../vendor/handlebars/handlebars",
    //icanhaz: "../../vendor/ich/ICanHaz",
    tastypiefix: "../../vendor/tastypiefix/backbone.tastypiefix",
    mustache: "../../vendor/mustache/mustache",
    syphon: "../../vendor/syphon/backbone.syphon",
    marionette: "../../vendor/marionette/lib/backbone.marionette",
    "backbone.wreqr": "../../vendor/marionette/lib/backbone.wreqr",
    "backbone.eventbinder": "../../vendor/marionette/lib/backbone.eventbinder",
    "backbone.babysitter": "../../vendor/marionette/lib/backbone.babysitter",
    //templates: "/static/js/templates"
  },

  shim: {
    "underscore": {
      exports: "_"
    },
   
    "backbone": {
      deps: ["underscore", "jquery", "jqcook"],
      exports: "Backbone",
      //init: function (_, $) { Backbone.$ = $; return Backbone; }
    },

    "marionette": {
      deps: ["backbone"],
      exports: "Backbone.Marionette"
    }//,

    //"tastypiefix": {
    //  deps: ["backbone"],
    //  exports: "tastypiefix"
    //},
    //
    //"backbonetastypie": {
    //deps: ["backbone", "underscore", "jquery"],
    //attach: "Backbone"
    //}
//
  }
});

require([
  'app', 'vent', 'backbone', 'router', 'controller',
  //'app', 'vent', 'backbone', 'router', 'controller',
  //'app', 'vent', 'backbone', 'router', 'controller',
],
function(app, vent, Backbone, Router, Controller) {
    console.log("Test output");
    console.log("$: " + typeof $);
    console.log("_: " + typeof _);
    console.log("Backbone: " + typeof Backbone);
    console.log("BAckbone-tastypie: " + typeof btp);
    app.start();

  new Router({
    controller : Controller
  });

  console.log("Starting routing");
  vent.trigger("routing:started");


});
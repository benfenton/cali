require.config({
  paths: {
    vendor: "../../vendor",

    almond: "../../vendor/almond/almond",

    text: "../../vendor/requirejs-text/text",


    jquery: "../../vendor/jquery/jquery",
    jqcook: "../../vendor/jquery/jquery.cookie",
    underscore: "../../vendor/lodash/dist/underscore-min",

    backbone: "../../vendor/backbone/backbone",
    //backbonetastypie: "../../vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie",
    //handlebars: "../../vendor/handlebars/handlebars",
    //icanhaz: "../../vendor/ich/ICanHaz",
    //tastypiefix: "../../vendor/tastypiefix/backbone.tastypiefix",
    mustache: "../../vendor/mustache/mustache",
    //syphon: "../../vendor/syphon/backbone.syphon",
    marionette: "../../vendor/marionette/lib/backbone.marionette",
    "backbone.wreqr": "../../vendor/marionette/lib/backbone.wreqr",
    "backbone.eventbinder": "../../vendor/marionette/lib/backbone.eventbinder",
    "backbone.babysitter": "../../vendor/marionette/lib/backbone.babysitter"
  },

  shim: {
    "underscore": {
      exports: "_"
    },
   
    "backbone": {
      deps: ["../../vendor/lodash/dist/underscore-min", "jquery"],
      exports: "Backbone"
    },

    // "backbonetastypie": {
    //  deps: ["backbone"],
    //  exports: "backbone-tastypie"
    //}

  }
});

require([
  'app', 'vent', 'backbone', 'router', 'controller',
  //'app', 'vent', 'backbone', 'backbonetastypie', 'router', 'controller',
],
function(app, vent, Backbone, Router, Controller) {
  //  console.log("Test output");
  //  console.log("$: " + typeof $);
  //  console.log("_: " + typeof _);
  //  console.log("Backbone: " + typeof Backbone);
  app.start();

  new Router({
    controller : Controller
  });
  console.log("Starting routing");
  app.vent.trigger("routing:started");

});
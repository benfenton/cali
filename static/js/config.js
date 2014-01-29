require.config({
  paths: {
    "vendor": "../../vendor",

    "almond": "../../vendor/almond/almond",

    "underscore": "../../vendor/lodash/dist/lodash.underscore",

    "jquery": "../../vendor/jquery/jquery",
    "backbone": "../../vendor/backbone/backbone",
    "backbone_tastypie": "../../vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie",
  },

  shim: {
    "backbone_tastypie": {
      deps: ["jquery", "underscore", "backbone"],

      exports: "Backbone"
    },

    "backbone": {
      deps: ["jquery", "underscore"],

      exports: "Backbone"
    }
  }
});
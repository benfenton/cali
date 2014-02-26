require.config({
  paths: {
    "vendor": "../../vendor",

    "almond": "../../vendor/almond/almond",

    "text": "../../vendor/requirejs-text/text",

    "underscore": "../../vendor/lodash/dist/lodash.underscore",

    "jquery": "../../vendor/jquery/jquery",
    "jqcook": "../../vendor/jquery/jquery.cookie",
    "backbone": "../../vendor/backbone/backbone",
    "backbone_tastypie": "../../vendor/backbone-tastypie/backbone_tastypie/static/js/backbone-tastypie",
  },

  shim: {
    "backbone_tastypie": {
      deps: ["jquery", "jqcook", "underscore", "backbone"],

      exports: "Backbone"
    },

    "backbone": {
      deps: ["jquery", "jqcook", "underscore"],

      exports: "Backbone"
    }
  }
});
require.config({
  paths: {
    vendor: "../vendor",
    almond: "../vendor/almond/almond",
    text: "../vendor/requirejs-text/text",
    jquery: "../vendor/jquery/jquery",
    jqueryui: "../vendor/jquery-ui-amd/jquery-ui-1.10.0/ui/minified/jquery-ui.min",
    underscore: "../vendor/underscore/underscore",
    backbone: "../vendor/backbone/backbone",
    fullcalendar: "../vendor/fullcalendar/fullcalendar.min",
    bootstrap: "../sass/vendor/assets/javascripts/bootstrap",
    affix: "../sass/vendor/assets/javascripts/bootstrap/affix",
    alert: "../sass/vendor/assets/javascripts/bootstrap/alert",
    button: "../sass/vendor/assets/javascripts/bootstrap/button",
    carousel: "../sass/vendor/assets/javascripts/bootstrap/carousel",
    collapse: "../sass/vendor/assets/javascripts/bootstrap/collapse",
    dropdown: "../sass/vendor/assets/javascripts/bootstrap/dropdown",
    modal: "../sass/vendor/assets/javascripts/bootstrap/modal",
    popover: "../sass/vendor/assets/javascripts/bootstrap/popover",
    scrollspy: "../sass/vendor/assets/javascripts/bootstrap/scrollspy",
    tab: "../sass/vendor/assets/javascripts/bootstrap/tab",
    tooltip: "../sass/vendor/assets/javascripts/bootstrap/tooltip",
    transition: "../sass/vendor/assets/javascripts/bootstrap/transition"
  },
  shim: {
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone",
    },
    "fullcalendar": {
      deps: ["jquery", "jqueryui"],
      exports: "fullcalendar"
    }/*,
    "bootstrap": {
      deps: ["jquery"],
      exports: "bootstrap"
    }*/
  }
});
require([
  'backbone', 'router', 'fullcalendar', 'collapse', 'transition',
],
function(Backbone, Router, FullCalendar, collapse, transition) {
  new Router();
  console.log(Backbone.History.started);
  if( ! Backbone.History.started)
    Backbone.history.start({ pushState: true, root: '/' });
  console.log(Backbone.History.started);
});
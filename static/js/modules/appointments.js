define(function(require, exports, module) {
  "use strict";

  var Backbone = require("backbone_tastypie");
  var Appointment = require("modules/appointment");

  return Appointments = Backbone.Collection.extend({
    model: Appointment,
    url: '/api/v1/appointment'
  });

});
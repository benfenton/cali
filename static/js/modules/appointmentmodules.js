define([
    'jquery',
    'backbone',
    'marionette',
    'modules/appointment',
    'modules/appointments',
], 
function($, Backbone, Marionette, Appointment, Appointments) {
    return {
        Appointment:Appointment,
        Appointments:Appointments,
    };
});
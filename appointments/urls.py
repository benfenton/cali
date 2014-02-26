from django.conf.urls import patterns, include, url



urlpatterns = patterns('',

    url(r'^$', 'appointments.views.index'),
    url(r'^$', 'appointments.views.add'), 

)
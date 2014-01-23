from django.conf.urls import patterns, include, url

from tastypie.api import Api
from api.resources import AppointmentResource

v1_api = Api(api_name='v1')
v1_api.register(AppointmentResource())

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', include('appointments.urls')),
    (r'^api/', include(v1_api.urls)),
    url(r'^admin/', include(admin.site.urls)),

    
)

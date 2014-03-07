from django.conf.urls import patterns, include, url

from tastypie.api import Api
from api.resources import AppointmentResource
from api.resources import UserResource

v1_api = Api(api_name='v1')
v1_api.register(AppointmentResource())
v1_api.register(UserResource())

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^api/', include(v1_api.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'cali.views.index'),
    url(r'^login/$', 'cali.views.login'),
    url(r'^auth/$', 'cali.views.auth_view'),
    url(r'^logout/$', 'cali.views.logout'),
    url(r'^loggedin/$', 'cali.views.loggedin'),
    url(r'^invalid/$', 'cali.views.invalid_login'), 
    url(r'^appointments/$', 'cali.views.appointments'),
    url(r'^create/$', include('appointments.urls')),
    url(r'^appointments/create/$', include('appointments.urls')),
)

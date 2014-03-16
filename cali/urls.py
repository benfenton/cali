from django.conf.urls import patterns, include, url
from django.contrib import admin
import backbone

#from tastypie.api import Api
#from api.resources import EventResource
#from api.resources import UserResource

#v1_api = Api(api_name='v1')
#v1_api.register(EventResource())
#v1_api.register(UserResource())

admin.autodiscover()
backbone.autodiscover()

urlpatterns = patterns('',
    #url(r'^api/', include(v1_api.urls)),
    #url(r'^admin/', include(admin.site.urls)),
    url(r'^backbone/', include(backbone.site.urls)),
    url(r'^$', 'cali.views.index'),
    url(r'^login/$', 'cali.views.login'),
    url(r'^auth/$', 'cali.views.auth_view'),
    url(r'^logout/$', 'cali.views.logout'),
    url(r'^loggedin/$', 'cali.views.loggedin'),
    url(r'^invalid/$', 'cali.views.invalid_login'), 
    url(r'^events/$', 'cali.views.events'),
    url(r'^register/$', 'cali.views.register_user'),
    url(r'^register_success/$', 'cali.views.register_success'),
    url(r'^create/$', include('events.urls')),
    url(r'^events/create/$', include('events.urls')),
)

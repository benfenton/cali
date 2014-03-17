from django.contrib.auth.models import User
from tastypie.authorization import DjangoAuthorization
from tastypie.authentication import SessionAuthentication
from tastypie.serializers import Serializer
from tastypie.validation import Validation
from tastypie import fields
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from events.models import Event


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'auth/user'
        allowed_methods = ['get', 'post', 'put', 'get', 'delete']
        excludes = ['email', 'password']
        #authentication = SessionAuthentication()
        authorization = DjangoAuthorization()
       
        
class EventResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')

    class Meta:
        queryset = Event.objects.all() 
        #list_allowed_methods = ['get', 'post']
        #detail_allowed_methods = ['get', 'post', 'put', 'delete']
        resource_name = 'event'
        limit = 50
        allowed_methods = ['get', 'post', 'put', 'patch', 'delete']
        #authentication = SessionAuthentication()
        authorization = DjangoAuthorization()
        #serializer = Serializer(formats=['json'])
        always_return_data = True
        filtering = {
            'slug': ALL,
            'user': ALL_WITH_RELATIONS,
            'id': ALL,
            'start': ALL,
            'end': ALL,
            'created': ['exact', 'range', 'gt', 'gte', 'lt', 'lte'],
        }

       
    def get_object_list(self, request): 
        return super(EventResource, self).get_object_list(request).filter(user=request.user)

    #def obj_create(self, bundle, **kwargs):
    #    return super(AppointmentResource, self).obj_create(bundle, user=bundle.request.user)
#
    #def apply_authorization_limits(self, request, object_list):
    #    return object_list.filter(user=request.user)

    def hydrate_user(self, bundle):
        bundle.obj.user = bundle.request.user
        return bundle

    


        






from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from tastypie.authorization import DjangoAuthorization
from django.contrib.auth.models import User
from tastypie.validation import Validation
from events.models import Event
from tastypie import fields

class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'auth/user'
        allowed_methods = ['get', 'post', 'put', 'get', 'delete']
        excludes = ['email', 'password']
        authorization = DjangoAuthorization()    
        
class EventResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')
    class Meta:
        queryset = Event.objects.all() 
        resource_name = 'event'
        limit = 100
        allowed_methods = ['get', 'post', 'put', 'patch', 'delete']
        authorization = DjangoAuthorization()
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

    def hydrate_user(self, bundle):
        bundle.obj.user = bundle.request.user
        return bundle

    


        






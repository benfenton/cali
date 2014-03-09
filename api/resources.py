from django.contrib.auth.models import User
from tastypie.authorization import DjangoAuthorization
from tastypie.authentication import Authentication
from tastypie.validation import Validation
from tastypie import fields
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from appointments.models import Appointment



class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'auth/user'
        #allowed_methods = ['get', 'post', 'get']
        #authorization = DjangoAuthorization()
        excludes = ['email', 'password', 'is_superuser']
        #authentication = SessionAuthentication()
       
        
       
        
class AppointmentResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')

    class Meta:
        queryset = Appointment.objects.all() 
        #list_allowed_methods = ['get', 'post']
        #detail_allowed_methods = ['get', 'post', 'put', 'delete']
        resource_name = 'appointment'
        limit = 50
        allowed_methods = ['get', 'post', 'put', 'patch', 'delete']
        #authentication = SillyAuthentication()
        authorization = DjangoAuthorization()
        #always_return_data = True
        filtering = {
            'slug': ALL,
            'user': ALL_WITH_RELATIONS,
            'created': ['exact', 'range', 'gt', 'gte', 'lt', 'lte'],
        }

       
    def get_object_list(self, request): 
        return super(AppointmentResource, self).get_object_list(request).filter(user=request.user)

    def hydrate_user(self, bundle):
        bundle.obj.user = bundle.request.user
        return bundle
        






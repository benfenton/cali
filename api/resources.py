from django.contrib.auth.models import User
from tastypie.authorization import DjangoAuthorization
from tastypie.authentication import SessionAuthentication
from tastypie import fields
from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from appointments.models import Appointment

class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
       
        
       
        
class AppointmentResource(ModelResource):
    user = fields.ForeignKey(UserResource, 'user')

    class Meta:
        queryset = Appointment.objects.all() 
        resource_name = 'appointment'
        #authentication = SessionAuthentication()
        authorization = DjangoAuthorization()
        
       
        
        
       
    def get_object_list(self, request): 
        return super(AppointmentResource, self).get_object_list(request).filter(user=request.user)

    
    #def obj_create(self, request): 
    #    return super(AppointmentResource, self).obj_create(request).filter(user=request.user)
          
        






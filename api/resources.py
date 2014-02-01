from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from appointments.models import Appointment


class AppointmentResource(ModelResource):
    class Meta:
        queryset = Appointment.objects.all()
        resource_name = 'appointment'
        authorization = Authorization()
        list_allowed_methods = ['get', 'post', 'put', 'delete']
        

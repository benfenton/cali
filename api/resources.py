from tastypie.resources import ModelResource
from appointments.models import Appointment

class AppointmentResource(ModelResource):
    class Meta:
        queryset = Appointment.objects.all()
        allowed_methods = ['get']

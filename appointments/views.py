
from django.shortcuts import render_to_response
from appointments.models import Appointment
from forms import AppointmentForm
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from cali.json_utils import *
import simplejson



def create(request):
    if request.POST:
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()

            return HttpResponseRedirect('/appointments')
    else:
        form = AppointmentForm()

    args = {}
    args.update(csrf(request))

    args['form'] = form

    return render_to_response('add_appointment.html', args)



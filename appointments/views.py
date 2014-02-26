
from django.shortcuts import render_to_response
from django.core.context_processors import csrf
from appointments.models import Appointment


def index(request):
    return render_to_response('appointments.html', {})


def add(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('add.html', c)






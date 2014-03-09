from django.shortcuts import render_to_response
from django.template import RequestContext
from appointments.models import Appointment
from appointments.forms import AppointmentForm
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from cali.json_utils import *
import pystache
import simplejson
from django.views.decorators.csrf import csrf_exempt


def login(request):
    c = {}
    c.update(csrf(request))
    return render_to_response('login.html', c)

def auth_view(request):
    username = request.POST.get('username', '')
    password = request.POST.get('password', '')
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        auth.login(request, user)
        return HttpResponseRedirect('/')
    else:
        return HttpResponseRedirect('/invalid')

def loggedin(request):
    return render_to_response('index.mustache',
                             {'full_name': request.user.username})

def invalid_login(request):
    return render_to_response('invalid_login.html')

def logout(request):
    auth.logout(request)
    return render_to_response('logout.html')

def appointments(request):
    return render_to_response('appointments.html')

@csrf_exempt
def index(request):

    return render_to_response('index.html',
                              {},
                              context_instance=RequestContext(request))






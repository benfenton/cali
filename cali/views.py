from django.shortcuts import render_to_response
from appointments.models import Appointment
from appointments.forms import AppointmentForm
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from cali.json_utils import *
import pystache
import simplejson



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

#def add(request):
#    c = {}
#    c.update(csrf(request))
#    return render_to_response('add.html', c)

def appointments(request):
    return render_to_response('appointments.html')

def index(request):
    if request.POST:
        form = AppointmentForm(request.POST)
        if form.is_valid():
            form.save()

            return HttpResponseRedirect('/')
    else:
        form = AppointmentForm()

    args = {}
    args.update(csrf(request))

    args['form'] = form
    return render_to_response('index.html', args)





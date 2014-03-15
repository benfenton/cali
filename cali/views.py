from django.shortcuts import render_to_response
from django.template import RequestContext
from events.models import Event
from events.forms import EventForm
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from django.core.context_processors import csrf
from cali.json_utils import *
import pystache
import simplejson
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group


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

def register_user(request): 
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.groups.add(Group.objects.get(name='member'))   
            return HttpResponseRedirect('/register_success')
    
    args = {}
    args.update(csrf(request))

    args['form'] = UserCreationForm()

    return render_to_response('register.html', args)

def register_success(request):
    return render_to_response('register_success.html')


def events(request):
    return render_to_response('events.html')

@csrf_exempt
def index(request):

    return render_to_response('index.html',
                             {'full_name': request.user.username},
                             context_instance=RequestContext(request))






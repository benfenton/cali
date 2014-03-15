
from django.shortcuts import render_to_response
from django.template import RequestContext
from events.models import Event
from forms import EventForm
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from cali.json_utils import *
import simplejson
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def create(request):
    if request.POST:
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()

            return HttpResponseRedirect('/events')
    else:
        form = EventForm()

    args = {}
    args.update(csrf(request))

    args['form'] = form

    return render_to_response('index.html', 
                              args,
                              context_instance=RequestContext(request))


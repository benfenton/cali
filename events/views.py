
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render_to_response
from django.template import RequestContext
from events.models import Event
from forms import EventForm
import simplejson

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

    return render_to_response('form.html', 
                              args,
                              context_instance=RequestContext(request))


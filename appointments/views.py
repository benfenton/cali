from django.template import loader, Context
from django.http import HttpResponse
from django.shortcuts import render
from appointments.models import Appointment


def index(request):
    template = loader.get_template('index.html')
    context = Context()
    response = template.render(context)
    return HttpResponse(response)











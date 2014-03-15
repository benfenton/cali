from django import forms
from models import Event

class EventForm(forms.ModelForm):

    class Meta: 
        model = Event

    forms.DateInput.input_type="date"
    forms.DateTimeInput.input_type="datetime-local" 
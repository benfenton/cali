from events.models import Event
from django import forms

class UserForm(forms.ModelForm):

    class Meta: 
        model = Event
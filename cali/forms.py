from django import forms
from events.models import Event

class UserForm(forms.ModelForm):

    class Meta: 
        model = Event
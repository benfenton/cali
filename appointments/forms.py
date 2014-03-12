from django import forms
from models import Appointment

class AppointmentForm(forms.ModelForm):

    class Meta: 
        model = Appointment

    forms.DateInput.input_type="date"
    forms.DateTimeInput.input_type="datetime-local" 
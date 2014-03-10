from django.contrib import admin

from appointments.models import Appointment


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'user', 'title', 'starttime', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('user', 'title', 'starttime')

    fieldsets = [
        ('Appointment', {
            'fields': ('user', 'title', 'starttime')
          })
    ]
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Appointment, AppointmentAdmin)
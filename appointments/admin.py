from django.contrib import admin

from appointments.models import Appointment


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'title', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('title',)

    fieldsets = [
        ('Appointment', {
            'fields': ('title',)
          })
    ]
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Appointment, AppointmentAdmin)
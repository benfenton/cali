from django.contrib import admin

from events.models import Event


class EventAdmin(admin.ModelAdmin):
    list_display = ('__unicode__', 'user', 'title', 'start', 'end', 'color', 'created_at', 'updated_at')
    list_filter = ('created_at', 'updated_at')
    search_fields = ('user', 'title', 'color')

    fieldsets = [
        ('Event', {
            'fields': ('user', 'title', 'start','end', 'color')
          })
    ]
    readonly_fields = ('created_at', 'updated_at')

admin.site.register(Event, EventAdmin)
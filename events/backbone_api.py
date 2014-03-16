import backbone
from events.models import Event

class EventAPIView(backbone.views.BackboneAPIView):
    model = Event
    display_fields = ('title', 'start', 'end', 'color')
    ordering = ('created_at', 'updated_at', 'id')

backbone.site.register(EventAPIView)
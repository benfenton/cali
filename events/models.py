from django.contrib.auth.models import User 
from urlparse import urlparse
from django.db import models
import datetime

class Event(models.Model):
    user = models.ForeignKey(User)
    title = models.CharField(max_length=200)
    start = models.DateTimeField()
    end = models.DateTimeField()
    color = models.CharField(max_length=50)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    @property 
    def domain(self):
        return urlparse(self.url).netloc


    def __unicode__(self):
        return self.title


    class Meta:
        verbose_name_plural = "events"

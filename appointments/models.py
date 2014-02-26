from urlparse import urlparse
from django.db import models
from django.contrib.auth.models import User 



class Appointment(models.Model):
    user = models.ForeignKey(User)
    title = models.CharField(max_length=200)
    date = models.DateTimeField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    @property 
    def domain(self):
        return urlparse(self.url).netloc


    def __unicode__(self):
        return self.title


    class Meta:
        verbose_name_plural = "appointments"

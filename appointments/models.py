from urlparse import urlparse

from django.db import models



class Appointment(models.Model):
    title = models.CharField(max_length=200)
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    @property 
    def domain(self):
        return urlparse(self.url).netloc


    def __unicode__(self):
        return self.title


    class Meta:
        verbose_name_plural = "appointments"

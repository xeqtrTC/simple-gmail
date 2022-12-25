from django.db import models

# Create your models here.

class Email(models.Model):
    message = models.TextField()
    subject = models.CharField(max_length=255)
    to = models.EmailField()
    timestamp = models.DateTimeField(auto_now_add=True)

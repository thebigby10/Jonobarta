from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class user_management(models.Model):
    # uses phone number as user_name
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nid = models.CharField(max_length=100)
    user_image_url = models.URLField(max_length=100)
    verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=4, default='8888')


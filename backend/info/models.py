from django.db import models
import uuid
from post.models import post
from user_management.models import user_management
from location.models import location

# Create your models here.
class verified(models.Model):
    verified_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    status = models.BooleanField()
    type = models.CharField(max_length=100) #fir, gd
    fir_number = models.CharField(max_length=100)
    gd_number = models.CharField(max_length=100)
    ps_location = models.ForeignKey(location, on_delete=models.CASCADE)

class missing_person_info(models.Model): #ene missing and found both er info thakbo
    missing_person_info_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    image_url = models.URLField(max_length=100)
    image_vector = models.IntegerField() #Eda change korte ashle - ahir gandu
    height = models.IntegerField()
    gender = models.CharField(max_length=10)
    hair_color = models.CharField(max_length=100)
    dress = models.CharField(max_length=100)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    last_seen = models.DateTimeField(auto_now=True)
    details = models.CharField(max_length=1000)
    verified_id = models.ForeignKey(verified, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class electronic_info(models.Model):
    electronic_info_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    device_type = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    model_number = models.CharField(max_length=100)
    details = models.CharField(max_length=1000)
    eiin_number = models.CharField(max_length=100)
    serial_numeber = models.CharField(max_length=100)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=100)
    verified_id = models.ForeignKey(verified, on_delete=models.CASCADE)

    def __str__(self):
        return self.device_type

class other_info(models.Model):
    other_info_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    type = models.CharField(max_length=100)
    details = models.CharField(max_length=1000)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=100)
    verified_id = models.ForeignKey(verified, on_delete=models.CASCADE)

    def __str__(self):
        return self.type

class crime_detail(models.Model):
    crime_detail_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    crime_type = models.CharField(max_length=100)
    incident_time = models.DateTimeField()
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    details = models.CharField(max_length=1000)
    item_type = models.CharField(max_length=100) #electronic, other
    electronic_info_id = models.ForeignKey(electronic_info, on_delete=models.CASCADE)
    other_info_id = models.ForeignKey(other_info, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=100)
    verified_id = models.ForeignKey(verified, on_delete=models.CASCADE)

    def __str__(self):
        return self.crime_type

class awareness_detail(models.Model):
    awareness_detail_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    details = models.CharField(max_length=1000)
    awareness_type = models.CharField(max_length=100)
    verified_id = models.ForeignKey(verified, on_delete=models.CASCADE)

    def __str__(self):
        return self.awareness_type

from django.db import models
import uuid

# Create your models here.
class location(models.Model):
    location_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    location_detais = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

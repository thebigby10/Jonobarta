from django.db import models
import uuid
from location.models import location

# Create your models here.
class crime_heatmap(models.Model):
    heatmap_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    crime_type = models.CharField(max_length=100)
    incident_count = models.IntegerField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.crime_type

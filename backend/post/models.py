from django.db import models
from user_management.models import user_management
from location.models import location
import uuid

# Create your models here.
class post(models.Model):
    post_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    user_id = models.ForeignKey(user_management, on_delete=models.CASCADE)

    # missing_person, missing_electronic, missing_other, crime, awareness, transparent_market
    post_type = models.CharField(max_length=100)
    post_title = models.CharField(max_length=100)
    post_content = models.CharField(max_length=1000)
    post_image_url = models.URLField(max_length=100)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.post_title

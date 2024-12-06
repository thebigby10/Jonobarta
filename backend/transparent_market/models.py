from django.db import models
import uuid

from user_management.models import user_management
from location.models import location
# Create your models here.
class item(models.Model):
    item_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    item_name = models.CharField(max_length=100)
    item_description = models.CharField(max_length=1000)

    def __str__(self):
        return self.item_name

class transparent_market(models.Model):
    market_item_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    user_id = models.ForeignKey(user_management, on_delete=models.CASCADE)
    item_id = models.ForeignKey(item, on_delete=models.CASCADE)
    location_id = models.ForeignKey(location, on_delete=models.CASCADE)
    price = models.IntegerField()
    image_url = models.URLField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

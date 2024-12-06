from django.db import models
import uuid
from post.models import post
from user_management.models import user_management

# Create your models here.
class comment(models.Model):
    comment_id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
    )
    post_id = models.ForeignKey(post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(user_management, on_delete=models.CASCADE)
    comment = models.CharField(max_length=1000)
    image_url = models.URLField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.comment

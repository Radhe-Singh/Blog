from django.db import models
from autoslug import AutoSlugField

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = AutoSlugField(populate_from='title',unique=True)
    content = models.TextField()
    featured_image = models.ImageField(upload_to='post_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
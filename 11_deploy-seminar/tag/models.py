from django.db import models

# Create your models here.


class Tag(models.Model):
    content = models.TextField(unique=True)

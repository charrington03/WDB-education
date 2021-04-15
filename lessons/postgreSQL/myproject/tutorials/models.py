from django.db import models


class Tutorial(models.Model):
    title = models.CharField(max_length=70, default='')
    description = models.CharField(max_length=200, default='')
    published = models.BooleanField(default=False)

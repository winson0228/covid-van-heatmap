from django.db import models
from django.utils.timezone import now
# Create your models here.

class DensityLevel(models.Model):
    level = models.IntegerField(default=0)
    levelStr = models.CharField(max_length=30, null=True)

class Alert(models.Model):
    timestamp = models.DateTimeField(default=now)
    area = models.TextField(null=True)
    city = models.CharField(max_length=60, null=True)
    density_level = models.ForeignKey(DensityLevel, on_delete=models.SET_NULL, null=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    lon = models.DecimalField(max_digits=9, decimal_places=6, null=True)



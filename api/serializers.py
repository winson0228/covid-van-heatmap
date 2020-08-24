from rest_framework import serializers

from .models import Alert, DensityLevel

class DensityLevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DensityLevel
        fields = ['level', 'levelStr']

class AlertSerializer(serializers.ModelSerializer):
    density_level = DensityLevelSerializer(read_only=True)
    class Meta:
        model = Alert
        fields = ('timestamp', 'area', 'city', 'density_level', 'lat', 'lon')
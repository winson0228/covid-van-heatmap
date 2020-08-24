from django.shortcuts import render
from rest_framework import viewsets

from .serializers import AlertSerializer
from .models import Alert


class AlertViewSet(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer

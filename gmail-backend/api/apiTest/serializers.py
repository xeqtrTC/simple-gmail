from rest_framework.serializers import ModelSerializer
from django import forms
from .models import Email

class EmailSerializer(ModelSerializer):
    class Meta:
        model = Email
        fields = ['message', 'to', 'subject', 'timestamp', 'id']

        def create(self, validated_data):
            email = Email.objects.create(
                message = validated_data['message'],
                to =  validated_data['to'],
                subject = validated_data['subject']
            )

            email.save()

            return email
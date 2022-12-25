from django.shortcuts import render
import json
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.decorators import  api_view, permission_classes, authentication_classes
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .serializers import EmailSerializer
from .models import Email

# Create your views here.



@method_decorator(csrf_protect, name='dispatch')
class emailsOfUser(APIView):

    def get(self, request, format=None):

        pk = request.user.email

        email = Email.objects.filter(to=pk)
        serializer = EmailSerializer(email, many=True)
        print(serializer)
        return Response(serializer.data)

@method_decorator(csrf_protect, name='dispatch')
class getEmailById(APIView):

    def get(self, request, pk, format=None):
        print(pk)
        user = Email.objects.get(id=pk)
        serializer = EmailSerializer(user, many=False)
        print(serializer.data)
        return Response(serializer.data)


class logoutView(APIView):

    def post (self, request, format=None):
        
        try:
            logout(request)
            return Response({'success': 'logouted'})
        except:
            return Response({'error': 'something went wrong'})

@method_decorator(csrf_protect, name='dispatch')
class addEmail(APIView):
    def post(self, request, format=None):
        data = request.data
        print(data)

        serializer = EmailSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            message = serializer.data['message']
            subject = serializer.data['subject']
            to = serializer.data['to']
            email = Email(message=message, to=to, subject=subject)

            email.save()
        else:
            print(serializer._errors)
            return Response(status=401)
        return Response(status=200)




@method_decorator(csrf_protect, name='dispatch')
class ViewInfo(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        
        user = request.user
        
        checkAuthenticated = user.is_authenticated
        
        if checkAuthenticated:
            return Response({
                'isauth': True,
                'username': user.username,
                'email': user.email
            })

        return Response({'isauth': False})

@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']

        user = authenticate(username=username, password=password)
        print(user)
        if user is not None:
            login(request, user)
            return Response({'success': 'User got it', 'username': username})
        else:
            return Response({'error': 'error'})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class getCSRFToken(APIView):
    permission_classes = [AllowAny]  
    def get(self, request, format=None):
        # res = Response
        # res.set_cookie('a', secure=True)

        return Response({'success': 'csrf cookie set'})
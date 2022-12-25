from django.urls import path
from . import views


urlpatterns = [
    path('login', views.LoginView.as_view()),
    path('logout', views.logoutView.as_view()),
    path('token', views.getCSRFToken.as_view()),
    path('info', views.ViewInfo.as_view()),
    path('addgmail', views.addEmail.as_view()),
    path('emailsOfUser', views.emailsOfUser.as_view()),
    path('email/<str:pk>/', views.getEmailById.as_view())
]
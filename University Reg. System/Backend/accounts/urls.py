
from django.urls import path
from .views import RegisterAPI, LoginAPI, HomeAPI

urlpatterns = [
    path('', HomeAPI.as_view(), name='home'),
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
]
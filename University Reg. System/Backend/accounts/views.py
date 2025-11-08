from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer, LoginSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class HomeAPI(APIView):
    """
    Simple view for the root path / to confirm the API is working.
    """
    renderer_classes = [JSONRenderer] 
    
    permission_classes = ()

    def get(self, request):
        return Response({
            "message": "Welcome to the University System API!",
            "available_endpoints": {
                "/register/": "POST to create a new user.",
                "/login/": "POST to obtain an authentication token."
            }
        }, status=status.HTTP_200_OK)


class RegisterAPI(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = ()  # Allow any user (authenticated or not) to access this view

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token.key,
            "message": "User registered successfully"
        }, status=status.HTTP_201_CREATED)



class LoginAPI(APIView):
    permission_classes = ()  # Allow any user (authenticated or not) to access this view
    serializer_class = LoginSerializer


    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "token": token.key,
                "user_id" : user.pk,
                "email" : user.email
            })
        else:
            return Response({"error": "Invalid Credentials. Please check your username and password"}, 
                            status=status.HTTP_401_UNAUTHORIZED)

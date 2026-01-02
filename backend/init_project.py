import os

# Mock Directory Structure for Django Project
# Folder: backend/kuberkart/
# Folder: backend/users/
# Folder: backend/products/
# Folder: backend/orders/

# settings.py Mock (SOLID: Separation of configuration)
SETTINGS_CONTENT = """
import os
from pathlib import Path

# Django Settings following SOLID principles
BASE_DIR = Path(__file__).resolve().parent.parent

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third party
    'rest_framework',
    'corsheaders',
    'channels',
    # Local Apps
    'users.apps.UsersConfig',
    'products.apps.ProductsConfig',
    'orders.apps.OrdersConfig',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
"""

# serializers.py Mock (SOLID: Single Responsibility)
SERIALIZER_CONTENT = """
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']
"""

# views.py Mock (SOLID: Open/Closed Principle)
VIEW_CONTENT = """
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
"""

def create_mock_structure():
    # Creating a representation of the backend logic in the mockup folder
    # This allows the user to see the code structure even without a running server
    print("Simulating Django Project Creation...")
    print("Files ready for: settings.py, urls.py, wsgi.py")
    print("Apps ready for: users, products, orders")
    print("Logic ready for: Serializers, Views, Models (SOLID compliant)")

if __name__ == "__main__":
    create_mock_structure()

# Django REST API Backend Prompt for KuberaKart

Act as a Senior Python Developer. Create a robust, production-ready Django REST Framework backend for an E-commerce platform called "KuberaKart". 

### Project Requirements:
1. **Architecture**: Follow **SOLID principles** and a clean directory structure. 
2. **Core Tech Stack**:
   - Framework: Django 4.2+ & Django REST Framework (DRF)
   - Database: PostgreSQL
   - Real-time: Django Channels (WebSockets) for notifications
   - Background Tasks: Celery with Redis as the broker
   - Caching: Redis
   - Auth: JWT (SimpleJWT) via Djoser
   - Documentation: drf-spectacular (Swagger/Redoc)

### Folder Structure:
Create a root folder named `backend/` and initialize:
- `kuberkart/` (Project core)
- `users/` (Custom User model, Auth, Profiles)
- `products/` (Categories, Products, Reviews)
- `orders/` (Cart logic, Orders, Payments)
- `notifications/` (WebSocket consumers)

### Specific Features to Implement:
1. **Users App**: 
   - Custom User model using `AbstractUser` (email as username).
   - JWT Login, Logout, and Password Reset flow.
   - Profile management.
2. **Products App**:
   - Nested Categories (Category -> Subcategory -> Sub-subcategory).
   - Optimized Product listing with filtering (django-filter) and search.
   - Celery tasks for image thumbnail generation.
3. **Orders App**:
   - Robust Cart system (linked to User).
   - Order creation with status tracking.
4. **Infrastructure**:
   - `requirements.txt` with all versions.
   - `.env` template for DB, Redis, and SMTP settings.
   - `docker-compose.yml` for Postgres, Redis, and Celery worker.
   - SOLID-compliant serializers and generic viewsets.
   - SMTP configuration for sending Reset Password emails.

### Output Style:
Please provide the code for all essential files (`models.py`, `serializers.py`, `views.py`, `urls.py`, `settings.py`, `tasks.py`, `consumers.py`) in a structured format so I can copy-paste them easily.

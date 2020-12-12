from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'brd', views.BoardViewSet)
router.register(r'comment', views.CommentViewSet)

urlpatterns = [
  path('', include(router.urls)),
]
from django.urls import path
from .views import TweetListCreateView

urlpatterns = [
    path('', TweetListCreateView.as_view(), name='tweet-list-create'),
]

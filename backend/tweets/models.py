from django.db import models
from django.contrib.auth.models import User

class Tweet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=280)
    created_at = models.DateTimeField(auto_now_add=True)

class Like(models.Model):
    tweet = models.ForeignKey(Tweet, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

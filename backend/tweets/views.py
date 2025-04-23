from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Tweet, Like
from .serializers import TweetSerializer, LikeSerializer

class TweetView(APIView):
    def get(self, request):
        tweets = Tweet.objects.all()
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TweetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class LikeTweetView(APIView):
    def post(self, request, tweet_id):
        tweet = Tweet.objects.get(id=tweet_id)
        like = Like.objects.create(tweet=tweet, user=request.user)
        return Response(LikeSerializer(like).data, status=201)

class TweetListCreateView(generics.ListCreateAPIView):
    queryset = Tweet.objects.all().order_by('-created_at')
    serializer_class = TweetSerializer
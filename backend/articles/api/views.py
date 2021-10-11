from rest_framework import viewsets

from articles.api.serializers import ArticleSerializer
from articles.models import Article


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()



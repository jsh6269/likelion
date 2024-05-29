from rest_framework import serializers


class SignUpRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    username = serializers.CharField()
    college = serializers.CharField()
    major = serializers.CharField()


class SignInRequestSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class TokenRefreshRequestSerializer(serializers.Serializer):
    refresh = serializers.CharField()

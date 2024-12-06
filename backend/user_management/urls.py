from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('register', views.register, name='register'),
    path('checkotp', views.checkOTP, name='checkOTP'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('test',views.test), # login required
]

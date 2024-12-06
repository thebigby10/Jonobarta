from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('MISSING_PERSON', views.missing_person,name = 'missing_person_post'),
    path('MISSING_ELECTRONIC', views.missing_electronic,name = 'missing_electronic_post'),
    path('MISSING_OTHERS', views.missing_others,name = 'missing_others_post'),
    path('CRIME', views.crime,name = 'crime_post'),
    path('PUBLIC_AWARENESS', views.public_awareness,name = 'public_awareness_post'),
    path('all', views.all_post,name = 'all_post'),

]

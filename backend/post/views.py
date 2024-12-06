from enum import verify
from re import L
from django.forms.models import model_to_dict
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

import json
from datetime import datetime
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from django.forms.models import model_to_dict

from django.contrib.auth.models import User

#import models
from user_management.models import user_management
from location.models import location
from info.models import verified, missing_person_info, electronic_info, other_info, crime_detail, awareness_detail
from .models import post

#/post/MISSING_PERSON
# Create your views here.
@csrf_exempt
def missing_person(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # print(data)
        name = data['name']
        age = data['age']
        image_url = data['imageUrl']
        image_vector = -1
        height = data['height']
        gender = data['gender']
        hair_color = data['hairColor']
        dress = data['dress']
        location_obj = data['location']
        last_seen = data['lastSeen']
        details = data['details']

        #create post
        post_type = "MISSING_PERSON"
        post_title = "Missing Person: " + name
        post_content = f"Name : {name}\nAge : {age}\nHeight : {height}\nGender : {gender}\nHair Color : {hair_color}\nDress : {dress}\nLocation : {location_obj["locationDetails"]}\nCreated At : {datetime.now()}\nLast Seen : {last_seen}\nDetails : {details}"
        post_image_url = image_url # can be replaced with poster

        #fetch location with latitude and longitude
        location_instance = location.objects.filter(latitude=location_obj['lat'], longitude=location_obj['lon'])
        #location not found create new location
        # print(location_instance)
# """
        if location_instance is None or len(location_instance) == 0:
            #location not found create new location
            # location_instance = location(location_details=location_obj['locationDetails'], latitude=location_obj['lat'], longitude=location_obj['lon'])
            location_instance = location(latitude=location_obj['lat'], longitude=location_obj['lon'],location_detais=location_obj['locationDetails'])
            location_instance.save()
        location_instance =  location.objects.get(latitude=location_obj['lat'], longitude=location_obj['lon'])
        location_id = location_instance
        created_at = datetime.now()

        # verified_instance = verified()
        # create verified id - does not work

        # verified_id = ""
        # if not post_verified():
        #     verified_instance = verified(status = False, type = "MISSING_PERSON", fir_number = "-1", gd_number = "-1", ps_location = location_id)
        #     verified_instance.save()
        #     verified_id = verified_instance.verified_id
        # else:
        #     verified_instance = verified(status = True, type = "MISSING_PERSON", fir_number = "-1", gd_number = "-1", ps_location = location_id)
        #     verified_instance.save()
        #     verified_id = verified_instance.verified_id
        # verified_instance = verified.objects.get(verified_id = verified_id)

        print(request.user)
        #get_user
        user_instance = user_management.objects.get(user_id = request.user)

        # print(verified_instance.type)
        #create post
        post_instance = post(user_id = user_instance, post_type = post_type, post_title = post_title, post_content = post_content, post_image_url = post_image_url, location_id = location_id, created_at = created_at)
        post_instance.save()#
        # post_instance = post.objects.find(user_s)
        # post_instance =
        # print(post_instance.post_id)

        missing_person_info_instance = missing_person_info(post_id = post_instance, name = name, age = age, image_url = image_url, image_vector = image_vector, height = height, gender = gender, hair_color = hair_color, dress = dress, location_id = location_id, last_seen = last_seen, details = details)
        missing_person_info_instance.save()

        return HttpResponse(status=200)
    return HttpResponse(status=400)
# """

#ahir eta koro
def post_verified():
    return False


@login_required
def missing_electronic(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        device_type = data['deviceType']
        brand = data['brand']
        model = data['model']
        details = data['details']
        eiin_number = data['eiin']
        serial_number = data['serialNumber']
        location = data['location']
        image_url = data['imageUrl']

    return

@login_required
def missing_others(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        post_id = data['postId']
        type = data['type']
        details = data['details']
        location_id = data['location']
        image_url = data['imageUrl']
        verified_id = data['verifiedId']
    return

@login_required
def crime(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        post_id = data['postId']
        crime_type = data['crimeType']
        incident_time = data['incidentTime']
        location_id = data['location']
        details = data['details']
        item_type = data['itemType']
        electronic_info_id = data['electronicInfoId']
        other_info_id = data['otherInfoId']
        image_url = data['imageUrl']
        verified_id = data['verifiedId']
    return

@login_required
def public_awareness(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        post_id = data['postId']
        location_id = data['location']
        details = data['details']
        awareness_type = data['awarenessType']
        verified_id = data['verifiedId']
    return

def all_posts(request):
    return

    if request.method == 'GET':
        all_posts = post.objects.all()
        all_posts_data = []
        for lpost in all_posts:
            post_title = lpost.post_title
            post_image = lpost.post_image_url
            post_location = model_to_dict(location.objects.get(location_id = lpost.location_id))
            user = {
                "phone_number" : model_to_dict(user_management.objects.get(user_id = lpost.user_id))[username],
                "name": model_to_dict(User.objects.get(user_id = lpost.user_id))[first_name],
                "image": model_to_dict(user_management.objects.get(user_id = lpost.user_id))[user_image_url],
            }

            all_posts_data.append({
                "post_title":post_title,
                "post_image":post_image,
                " post_location":post_location,
               "user":user
            })
    return JsonResponse(all_posts_data, safe=False)


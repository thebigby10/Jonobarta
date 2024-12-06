from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth import logout as auth_logout

from django.http import JsonResponse

from user_management.models import user_management

import json
import requests
import random

from django.views.decorators.csrf import csrf_exempt

# import .env
import os
from dotenv import load_dotenv
load_dotenv()
# account_sid = os.getenv('account_sid')
# auth_token = os.getenv('auth_token')
sms_api_key = os.getenv('sms_api_key')

nid_verification_url = "http://127.0.0.1:5000/verify"
# twilio_number = "+18773176451"

# /user/register
@csrf_exempt
def register(request):
    # return HttpResponse("Hello, world. You're at the register page.")
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data['name']
        phone_number = data['phoneNumber']
        password = data['password']
        nid_number = data['nidNumber']
        image_url = data['image']
        # check if the user is valid using nid
        response = requests.get(nid_verification_url, json={
                'nid': nid_number,
                'name': name,
                'image_url':image_url
            });
        if response.status_code == 200:
            if User.objects.filter(username = phone_number).exists():
                return HttpResponse(status=200)
            print("nid is valid")
            # save user with an otp and verified = false
            user_instance = User.objects.create_user(username = phone_number, first_name=name)
            user_instance.set_password(password)

            user_management_instance = user_management(user=user_instance, nid=nid_number, user_image_url=image_url)

            #sendotp
            otp = generateAndSendOTP(phone_number)

            if otp!="-1":
                user_management_instance.otp = otp;
                user_instance.save()
                user_management_instance.save()
                return HttpResponse(status=200)
            else:
                return HttpResponse(status=400)
        else:
            print("nid is not valid")
            return HttpResponse(status=404)

# /user/checkotp
@csrf_exempt
def checkOTP(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data['phoneNumber']
        password = data['password']
        otp = data['otp']
        print(f"data: {data}")
        user_instance = User.objects.get(username=phone_number)
        user_management_instance = user_management.objects.get(user=user_instance)
        if user_management_instance.otp == otp:
            user_instance.is_verified = True
            user_instance.save()
            user_management_instance.verified = True
            user_management_instance.save()
            # login
            user = authenticate(request, username=phone_number, password=password)
            if user is not None and user.is_active:
                auth_login(request, user)
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=400)
    else:
        return HttpResponse(status=400)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        phone_number = data['phoneNumber']
        password = data['password']
        user = authenticate(request, username=phone_number, password=password)
        user_instance = User.objects.get(username=phone_number)
        user_management_instance = user_management.objects.get(user=user_instance)
        if user is not None and user.is_active:
            auth_login(request, user)
            user_data = {
                "phoneNumber": phone_number,
                "nid": user_management_instance.nid,
                "user_image": user_management_instance.user_image_url,
                "name": user.first_name
            }
            return JsonResponse(user_data)
        else:
            return HttpResponse(status=404)

@csrf_exempt
@login_required
def logout(request):
    if request.method=='POST':
        auth_logout(request)
        return HttpResponse(status=200)

def generateAndSendOTP(phone_number):
    otp = str(random.randint(1000, 9999))
    message = f"Your None OTP is {otp}"

    # phone number format 0081841490380
    API_URL = "http://bulksmsbd.net/api/smsapi"
    API_KEY = sms_api_key
    SENDER_ID = "8809617623164"  # Replace with your approved sender ID
    NUMBER = phone_number  # Replace with the recipient's number
    MESSAGE = f"Your Jonobarta OTP is {otp}"  # Replace with your message

    params = {
        "api_key": API_KEY,
        "senderid": SENDER_ID,
        "number": NUMBER,
        "message": MESSAGE,
        "type": "text",  # 'text' is the type of SMS
    }


    #sms_url = f"http://bulksmsbd.net/api/smsapi?api_key={sms_api_key}&type=text&number={phone_number}&senderid=Random&message={message}"
    response = requests.post(API_URL , data=params)
    print(response)
    if response.status_code == 200:
        print(otp)
        return otp
    else:
        return "-1"
    
@login_required
def test(request):
    print(request.user)
    return HttpResponse("user login")

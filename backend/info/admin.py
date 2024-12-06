from django.contrib import admin

# Register your models here.
from .models import verified, missing_person_info, electronic_info, other_info, crime_detail, awareness_detail

admin.site.register(verified)

admin.site.register(missing_person_info)

admin.site.register(electronic_info)

admin.site.register(other_info)

admin.site.register(crime_detail)

admin.site.register(awareness_detail)
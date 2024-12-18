# Generated by Django 5.1.4 on 2024-12-06 09:00

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('location', '0001_initial'),
        ('user_management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='item',
            fields=[
                ('item_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('item_name', models.CharField(max_length=100)),
                ('item_description', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='transparent_market',
            fields=[
                ('market_item_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('price', models.IntegerField()),
                ('image_url', models.URLField(max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('item_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='transparent_market.item')),
                ('location_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='location.location')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_management.user_management')),
            ],
        ),
    ]

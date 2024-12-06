# Generated by Django 5.1.4 on 2024-12-06 09:00

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='crime_heatmap',
            fields=[
                ('heatmap_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('crime_type', models.CharField(max_length=100)),
                ('incident_count', models.IntegerField()),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('location_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='location.location')),
            ],
        ),
    ]

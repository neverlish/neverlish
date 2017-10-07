# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-10-07 11:35
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('games', '0002_auto_20171006_1729'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='games', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]

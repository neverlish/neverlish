# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-12 12:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20170412_1157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='tag_set',
            field=models.ManyToManyField(blank=True, to='blog.Tag'),
        ),
    ]

# Generated by Django 3.0 on 2020-04-23 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0020_auto_20200423_1827'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='part',
            name='kind',
        ),
        migrations.AddField(
            model_name='productkind',
            name='parts',
            field=models.ManyToManyField(blank=True, to='furniture.Part'),
        ),
    ]

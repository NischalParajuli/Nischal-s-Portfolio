# Generated migration to convert ImageField to CharField

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_userdetails_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetails',
            name='image',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]

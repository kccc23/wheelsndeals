# Generated by Django 4.0.3 on 2023-05-02 18:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account_rest', '0002_alter_account_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='role',
        ),
        migrations.DeleteModel(
            name='RoleVO',
        ),
    ]

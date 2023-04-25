from django.urls import path
from .views import api_salespeople, api_salesperson, api_customers, api_customer


urlpatterns = [
    path("salespeople/", api_salespeople, name="salespeople"),
    path("salespeople/<int:id>/", api_salesperson, name="delete_salespeople"),
    path("customers/", api_customers, name="customers"),
    path("customers/<int:id>/", api_customer, name="delete_customer")
]

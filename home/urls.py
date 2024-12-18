from django.urls import path
from . import views

app_name = 'home'

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('destinations/', views.DestinationsView.as_view(), name='destinations'),
    path('sign_up/', views.SignUpView.as_view(), name='sign_up'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('contact_us/', views.ContactView.as_view(), name='contact'),
    path('cars/', views.CarsView.as_view(), name='cars'),
]
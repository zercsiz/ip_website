from django.shortcuts import render
from django.views import View


class HomeView(View):
    def get(self, request):
        return render(request, 'home/home.html')


class DestinationsView(View):
    def get(self, request):
        return render(request, 'home/destinations.html')
    
class SignUpView(View):
    def get(self, request):
        return render(request, 'home/sign_up.html')
    
    
class LoginView(View):
    def get(self, request):
        return render(request, 'home/login.html')
    

class ContactView(View):
    def get(self, request):
        return render(request, 'home/contact.html')
    
    
class CarsView(View):
    def get(self, request):
        return render(request, 'home/cars.html')
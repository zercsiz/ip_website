from django.shortcuts import render
from django.views import View


class HomeView(View):
    def get(self, request):
        return render(request, 'home/home.html')


class DevView(View):
    def get(self, request):
        return render(request, 'home/dev.html')
    
class SignUpView(View):
    def get(self, request):
        return render(request, 'home/sign_up.html')
    
    
class LoginView(View):
    def get(self, request):
        return render(request, 'home/login.html')
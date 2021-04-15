from django.shortcuts import render

import urllib.request
import json


# Create your views here.
def index(request):
    if request.method == 'POST':
        city = request.POST['city']
        #api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        source = urllib.request.urlopen('http://api.openweathermap.org/data/2.5/weather?q=' 
        + city + '&units=metric&appid=4be0ac9af047abfbb419f03e49bfb50c').read() # returns searched city
        list_of_data = json.loads(source) # holds all requested data

        data = {
            "temperature": str(list_of_data['main']['temp']),
            "description": str(list_of_data['weather'][0]['main'])
        }
        print(data)
    else:
        data={}
    
    return render(request, 'main/index.html', data) #main/index.html is where i'll store html file
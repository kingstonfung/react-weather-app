/*
URLs for retrieving weather information. Notice these links are incomplete as it ends with "?city="

We will be appending the city name to the end of the string prior to our network calls, so the backend
knows which city we are inquiring.

The information is cached from https://openweathermap.org, due to API limitation we will use static
copies of the weather data for now.

This static endpoint is defaulted to "edmonton", with 4 other possible query inputs:
"vancouver", "montreal", "calgary", and "toronto".
*/

export const CITY_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=$$$$$,ca&appid=abb695648274743abff28bd89d04ed01&units=metric';

export const CITY_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=$$$$$,ca&appid=abb695648274743abff28bd89d04ed01&units=metric&cnt=5';

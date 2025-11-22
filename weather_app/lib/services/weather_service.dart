import 'package:weather/weather.dart';
import 'package:geocoding/geocoding.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class WeatherService {

  final String apiKey = dotenv.env['OPENWEATHER_KEY']!;

  Future<Weather> fetchWeatherByCity(String cityName) async {
    List<Location> locations = await locationFromAddress(cityName);
    if (locations.isNotEmpty) {
      final loc = locations.first;
      WeatherFactory wf = WeatherFactory(apiKey, language: Language.ENGLISH);
      return await wf.currentWeatherByLocation(loc.latitude, loc.longitude);
    } else {
      throw Exception("Not found location");
    }
  }
}
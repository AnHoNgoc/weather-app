import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:geolocator/geolocator.dart';
import 'package:weather/weather.dart';

import '../services/weather_service.dart';

part 'weather_event.dart';
part 'weather_state.dart';

class WeatherBloc extends Bloc<WeatherEvent, WeatherState> {

  final weatherService = WeatherService();



  WeatherBloc() : super(WeatherBlocInitial()) {
    on<FetchWeather>((event, emit) async {
      emit(WeatherBlocLoading());
      try {

        final apiKey = dotenv.env['OPENWEATHER_KEY'];
        if (apiKey == null || apiKey.isEmpty) {
          print("API key chưa được load hoặc null!");
        } else {
          print("API key loaded, độ dài: ${apiKey.length}");
        }

        WeatherFactory wf = WeatherFactory(dotenv.env['OPENWEATHER_KEY']!, language: Language.ENGLISH);


        Weather weather = await wf.currentWeatherByLocation(
          event.position.latitude,
          event.position.longitude,
        );

        print("Weather by location: $weather" );

        emit(WeatherBlocSuccess(weather));
      } catch (e) {
        emit(WeatherBlocFailure());
      }
    });

    on<FetchWeatherByCity>((event, emit) async {
      emit(WeatherBlocLoading());
      try {
        Weather weather = await weatherService.fetchWeatherByCity(event.cityName);

        print("Weather by city: $weather" );

        emit(WeatherBlocSuccess(weather));
      } catch (e) {
        emit(WeatherBlocFailure());
      }
    });
  }

}

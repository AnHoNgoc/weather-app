import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:geolocator/geolocator.dart';
import 'package:weather_app/screens/home_screen.dart';
import 'package:weather_app/services/location_service.dart';

import 'bloc/weather_bloc.dart';

Future<void> main() async  {

  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.portraitDown,
  ]);
  await dotenv.load(fileName: ".env");
  runApp(
    BlocProvider(
      create: (_) => WeatherBloc(),
      child: const MyApp(),
    ),
  );;
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      designSize: const Size(360, 690),
      minTextAdapt: true,
      builder: (context, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Weather App',
          home: child,
        );
      },
      // Chỉ cần pass widget trung gian
      child: const HomeWrapper(),
    );
  }
}

class HomeWrapper extends StatelessWidget {
  const HomeWrapper({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Position>(
      future: LocationService.determinePosition(),
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          context.read<WeatherBloc>().add(FetchWeather(snapshot.data!));
          return const HomeScreen();
        } else if (snapshot.hasError) {
          return Scaffold(
            body: Center(child: Text('${snapshot.error}')),
          );
        } else {
          return const Scaffold(
            body: Center(child: CircularProgressIndicator()),
          );
        }
      },
    );
  }
}



import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:intl/intl.dart';
import 'package:weather_app/bloc/weather_bloc.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Widget getWeatherIcon(int code) {
    if (code >= 200 && code < 300) {
      return Image.asset('assets/img/1.png', width: 100.w, height: 100.h);
    } else if (code >= 300 && code < 400) {
      return Image.asset('assets/img/2.png', width: 100.w, height: 100.h);
    } else if (code >= 500 && code < 600) {
      return Image.asset('assets/img/3.png', width: 100.w, height: 100.h);
    } else if (code >= 600 && code < 700) {
      return Image.asset('assets/img/4.png', width: 100.w, height: 100.h);
    } else if (code >= 700 && code < 800) {
      return Image.asset('assets/img/5.png', width: 100.w, height: 100.h);
    } else if (code == 800) {
      return Image.asset('assets/img/6.png', width: 100.w, height: 100.h);
    } else if (code > 800 && code <= 804) {
      return Image.asset('assets/img/7.png', width: 100.w, height: 100.h);
    } else {
      return Image.asset('assets/img/7.png', width: 100.w, height: 100.h);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        systemOverlayStyle: const SystemUiOverlayStyle(
          statusBarBrightness: Brightness.dark,
        ),
      ),

      body: Padding(
        padding: EdgeInsets.fromLTRB(40.w, 1.2 * kToolbarHeight.h, 40.w, 20.h),
        child: SizedBox(
          height: 1.sh,
          child: Stack(
            children: [
              // Background circles
              Align(
                alignment: const AlignmentDirectional(3, -0.3),
                child: Container(
                  height: 300.h,
                  width: 300.w,
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    color: Colors.deepPurple,
                  ),
                ),
              ),
              Align(
                alignment: const AlignmentDirectional(-3, -0.3),
                child: Container(
                  height: 300.h,
                  width: 300.w,
                  decoration: const BoxDecoration(
                    shape: BoxShape.circle,
                    color: Color(0xFF673AB7),
                  ),
                ),
              ),
              Align(
                alignment: const AlignmentDirectional(0, -1.2),
                child: Container(
                  height: 300.h,
                  width: 600.w,
                  decoration: const BoxDecoration(
                    color: Color(0xFFFFAB40),
                  ),
                ),
              ),

              // Blur background
              BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 100, sigmaY: 100),
                child: Container(color: Colors.transparent),
              ),

              // Weather Bloc
              BlocBuilder<WeatherBloc, WeatherState>(
                builder: (context, state) {
                  if (state is! WeatherBlocSuccess) {
                    return const SizedBox.shrink();
                  }

                  return SizedBox(
                    height: 1.sh,
                    width: 1.sw,
                    child: SingleChildScrollView(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          // Location
                          Text(
                            '📍 ${state.weather.areaName}',
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w300,
                              fontSize: 14.sp,
                            ),
                          ),

                          SizedBox(height: 8.h),

                          // Welcome
                          Text(
                            'Good Morning',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 25.sp,
                              fontWeight: FontWeight.bold,
                            ),
                          ),

                          // Weather Icon
                          getWeatherIcon(state.weather.weatherConditionCode!),

                          // Temperature
                          Center(
                            child: Text(
                              '${state.weather.temperature!.celsius!.round()}°C',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 55.sp,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),

                          Center(
                            child: Text(
                              state.weather.weatherMain!.toUpperCase(),
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 25.sp,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),

                          SizedBox(height: 5.h),

                          Center(
                            child: Text(
                              DateFormat('EEEE dd •').add_jm().format(
                                state.weather.date!.toLocal(),
                              ),
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16.sp,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),

                          SizedBox(height: 30.h),

                          // SUNRISE - SUNSET
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Expanded(
                                child: Row(
                                  children: [
                                    Image.asset('assets/img/11.png', scale: 10),
                                    SizedBox(width: 5.w),

                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Sunrise',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w300,
                                              fontSize: 14.sp,
                                            ),
                                          ),
                                          SizedBox(height: 3.h),
                                          Text(
                                            DateFormat()
                                                .add_jm()
                                                .format(state.weather.sunrise!
                                                .toLocal()),
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w700,
                                              fontSize: 14.sp,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              Expanded(
                                child: Row(
                                  children: [
                                    Image.asset('assets/img/12.png', scale: 10),
                                    SizedBox(width: 5.w),

                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Sunset',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w300,
                                              fontSize: 14.sp,
                                            ),
                                          ),
                                          SizedBox(height: 3.h),
                                          Text(
                                            DateFormat()
                                                .add_jm()
                                                .format(state.weather.sunset!
                                                .toLocal()),
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w700,
                                              fontSize: 14.sp,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),

                          Padding(
                            padding: EdgeInsets.symmetric(vertical: 5.h),
                            child: const Divider(color: Colors.grey),
                          ),

                          // TEMP MAX & MIN
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Expanded(
                                child: Row(
                                  children: [
                                    Image.asset('assets/img/13.png', scale: 10),
                                    SizedBox(width: 5.w),

                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                        children: [
                                          const Text(
                                            'Temp Max',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w300,
                                            ),
                                          ),
                                          SizedBox(height: 3.h),
                                          Text(
                                            "${state.weather.tempMax!.celsius!.round()} °C",
                                            overflow: TextOverflow.ellipsis,
                                            style: const TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w700,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),

                              Expanded(
                                child: Row(
                                  children: [
                                    Image.asset('assets/img/14.png', scale: 10),
                                    SizedBox(width: 5.w),

                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                        children: [
                                          const Text(
                                            'Temp Min',
                                            style: TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w300,
                                            ),
                                          ),
                                          SizedBox(height: 3.h),
                                          Text(
                                            "${state.weather.tempMin!.celsius!.round()} °C",
                                            overflow: TextOverflow.ellipsis,
                                            style: const TextStyle(
                                              color: Colors.white,
                                              fontWeight: FontWeight.w700,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),

      floatingActionButton: Builder(
        builder: (ctx) {
          return FloatingActionButton(
            backgroundColor: Colors.deepPurple.shade700, // sâu hơn, đồng bộ với theme
            foregroundColor: Colors.white, // icon nổi bật trên nền tím
            child: const Icon(Icons.edit_location),
            onPressed: () {
              showDialog(
                context: ctx,
                builder: (dialogContext) {
                  String cityName = '';

                  return AlertDialog(
                    backgroundColor: Colors.grey.shade900, // dark theme, dễ nhìn
                    title: const Text(
                      'Enter city name',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    content: TextField(
                      style: const TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        hintText: 'e.g., Hanoi',
                        hintStyle: TextStyle(color: Colors.grey.shade400),
                        enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.grey.shade700),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.deepPurple.shade400),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        filled: true,
                        fillColor: Colors.grey.shade900,
                        contentPadding: const EdgeInsets.symmetric(
                          vertical: 12,
                          horizontal: 12,
                        ),
                      ),
                      onChanged: (val) => cityName = val,
                    ),
                    actions: [
                      TextButton(
                        onPressed: () => Navigator.pop(dialogContext),
                        child: const Text(
                          'Cancel',
                          style: TextStyle(color: Colors.redAccent),
                        ),
                      ),
                      TextButton(
                        onPressed: () {
                          if (cityName.isNotEmpty) {
                            ctx
                                .read<WeatherBloc>()
                                .add(FetchWeatherByCity(cityName));
                          }
                          Navigator.pop(dialogContext);
                        },
                        child: const Text(
                          'Confirm',
                          style: TextStyle(color: Colors.lightGreenAccent),
                        ),
                      ),
                    ],
                  );
                },
              );
            },
          );
        },
      ),
    );
  }
}

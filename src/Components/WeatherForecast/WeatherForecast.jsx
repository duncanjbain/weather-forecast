import React from 'react';
import HourlyWeatherForecast from '../HourlyWeatherForecast/HourlyWeatherForecast';
import DailyWeatherForecast from '../DailyWeatherForecast/DailyWeatherForecast';
import { utcToHHMM } from '../../Services/timeConvert';

const WeatherForecast = ({ locationName, weatherForecast }) => {
  return (
    <section className="p-4 flex w-auto">
      <div className="w-full">
        <h3 className="text-2xl md:text-2xl">{locationName}</h3>
        <p className="text-bold text-6xl">
          {Math.round(weatherForecast.current.temp)}&deg;c
        </p>
        <div className="flex flex-row mt-2">
          <p className="pr-4">
            Feels like {Math.round(weatherForecast.current.feels_like)}&deg;C
          </p>
          <p className="pr-4">
            {Math.round(weatherForecast.daily[0].temp.min)}&deg;C /{' '}
            {Math.round(weatherForecast.daily[0].temp.max)}&deg;C
          </p>
        </div>
        <div className="flex flex-row mt-4">
          <p className="pr-4">
            Sunrise {utcToHHMM(weatherForecast.current.sunrise)}
          </p>
          <p className="pr-4">
            Sunset {utcToHHMM(weatherForecast.current.sunset)}
          </p>
        </div>
        <div className="flex flex-row justify-between mt-4">
          {weatherForecast.hourly.slice(1,8).map(hour =><HourlyWeatherForecast hourlyForecast={hour} />)}
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4">
          {weatherForecast.daily.slice(1,8).map(day =><DailyWeatherForecast dailyForecast={day} />)}
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;

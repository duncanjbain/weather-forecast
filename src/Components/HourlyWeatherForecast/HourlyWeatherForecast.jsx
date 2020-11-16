import React from 'react';
import { utcToHHMM } from '../../Services/timeConvert';

const HourlyWeatherForecast = ({ hourlyForecast }) => {
  return (
    <div className="flex-1">
      <h3 className="mx-auto text-center font-bold">{utcToHHMM(hourlyForecast.dt)}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${hourlyForecast.weather[0].icon}@4x.png`}
        alt={`${hourlyForecast.weather[0].description} Icon`}
        className="w-16 mx-auto"
      />
      <p className="text-center">{Math.round(hourlyForecast.temp)}&deg;C</p>
    </div>
  );
};

export default HourlyWeatherForecast;

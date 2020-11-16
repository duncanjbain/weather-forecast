import React from 'react';
import utcToHHMM from '../../Services/timeConvert';

const HourlyWeatherForecast = ({ hourlyForecast }) => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">{utcToHHMM(hourlyForecast.dt)}</h3>
      <p className="capitalize">{hourlyForecast.weather[0].main}</p>
      <p>{Math.round(hourlyForecast.temp)}&deg;C</p>
    </div>
  );
};

export default HourlyWeatherForecast;

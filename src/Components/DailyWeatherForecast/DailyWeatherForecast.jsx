import React from 'react';
import { utcToWeekDayShort } from '../../Services/timeConvert';

const DailyWeatherForecast = ({ dailyForecast }) => {
  return (
    <div className="flex-1">
      <h3 className="font-bold">{utcToWeekDayShort(dailyForecast.dt)}</h3>
      <p className="capitalize">{dailyForecast.weather[0].description}</p>
      <p>
        {Math.round(dailyForecast.temp.min)}&deg;C /{' '}
        {Math.round(dailyForecast.temp.max)}&deg;C
      </p>
    </div>
  );
};

export default DailyWeatherForecast;

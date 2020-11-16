import React from 'react';
import { utcToWeekDayShort } from '../../Services/timeConvert';

const DailyWeatherForecast = ({ dailyForecast }) => {
  return (
    <div className="flex flex-row content-between md:justify-between md:flex-col mt-4 md:flex-1">
      <h3 className="text-center font-bold">{utcToWeekDayShort(dailyForecast.dt)}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@4x.png`}
        alt={`${dailyForecast.weather[0].description} Icon`}
        className="w-16 mx-auto"
      />
      <p className="mx-auto">
        {Math.round(dailyForecast.temp.min)}&deg;C /{' '}
        {Math.round(dailyForecast.temp.max)}&deg;C
      </p>
    </div>
  );
};

export default DailyWeatherForecast;

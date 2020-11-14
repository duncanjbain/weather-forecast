import React from 'react';

const WeatherForecast = ({ locationName, weatherForecast }) => {
  return (
    <section className="p-4 flex w-auto">
      <div className="w-full">
        <h3 className="text-2xl md:text-2xl">{locationName}</h3>
        <p className="text-bold text-6xl">
          {Math.round(weatherForecast.current.temp)}&deg;c
        </p>
        <div className="flex flex-row">
          <p className="pr-4">
            Feels like {Math.round(weatherForecast.current.feels_like)}&deg;C
          </p>
          <p className="pr-4">
            {Math.round(weatherForecast.daily[0].temp.max)}&deg;C /{' '}
            {Math.round(weatherForecast.daily[0].temp.min)}&deg;C
          </p>
        </div>
        <div className="flex flex-row">
          <p className="pr-4">Sunrise {(weatherForecast.current.sunrise)}</p>
          <p className="pr-4">Sunset {(weatherForecast.current.sunset)}</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;

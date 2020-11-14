import React from 'react';

const WeatherForecast = ({ locationName, weatherForecast }) => {
  const utcToHHMM = (time) => {
    const utcTime = new Date(time * 1e3);
    const addZeroBefore = (n) => {
      return (n < 10 ? '0' : '') + n;
    };
    const currentForecastHour = addZeroBefore(utcTime.getHours());
    const currentForecastMinutes = addZeroBefore(utcTime.getMinutes());
    return `${currentForecastHour}:${currentForecastMinutes}`;
  };

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
          <p className="pr-4">
            Sunrise {utcToHHMM(weatherForecast.current.sunrise)}
          </p>
          <p className="pr-4">
            Sunset {utcToHHMM(weatherForecast.current.sunset)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeatherForecast;

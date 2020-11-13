import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Header from './Components/Header/Header';
import WeatherForecastSearch from './Components/WeatherForecastSearch/WeatherForecastSearch';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import fetchWeatherForecast from './Services/weatherApi';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchedLatLong, setSearchedLatLong] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [weatherForecast, setWeatherForecast] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    if (searchedLatLong == null) {
      return;
    }
    fetchWeatherForecast(searchedLatLong).then((data) =>
      setWeatherForecast(data)
    );
  }, [searchedLatLong]);

  return (
    <>
      <Header />
      <main className="w-full mx-auto md:w-1/2">
        <WeatherForecastSearch
          setSearchedLocation={setSearchedLocation}
          setSearchedLatLong={setSearchedLatLong}
          setWeatherForecast={setWeatherForecast}
          setLocationName={setLocationName}
        />
        <WeatherForecast weatherForecast={weatherForecast} />
      </main>
    </>
  );
};

export default App;

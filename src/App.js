import React, { useState, useEffect } from 'react';
import './styles/main.css';
import Header from './Components/Header/Header';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';
import fetchWeatherForecast from './Services/weatherApi';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [searchedLatLong, setSearchedLatLong] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    if (searchedLatLong == null) {
      return;
    }
    fetchWeatherForecast(searchedLatLong).then(data => setWeatherForecast(data))y
  }, [searchedLatLong]);

  return (
    <>
      <Header />
      <WeatherForecast
        setSearchedLocation={setSearchedLocation}
        setSearchedLatLong={setSearchedLatLong}
        weatherForecast={weatherForecast}
        setWeatherForecast={setWeatherForecast}
      />
    </>
  );
};

export default App;

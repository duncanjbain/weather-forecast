import React, { useState } from 'react';
import './styles/main.css';
import Header from './Components/Header/Header';
import WeatherForecast from './Components/WeatherForecast/WeatherForecast';

const App = () => {

 // eslint-disable-next-line no-unused-vars
 const [searchedLocation, setSearchedLocation] = useState({});
  // eslint-disable-next-line no-unused-vars
 const [searchedLatLong, setSearchedLatLong] = useState({});

  return (
    <>
      <Header />
      <WeatherForecast setSearchedLocation={setSearchedLocation} setSearchedLatLong={setSearchedLatLong} />
    </>
  );
}

export default App;

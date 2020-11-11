import React from 'react';
import './styles/main.css';
import Header from "./Components/Header/Header"
import WeatherForecast from "./Components/WeatherForecast/WeatherForecast"

function App() {
  return (
    <>
    <Header />
    <WeatherForecast />
    </>
  );
}

export default App;

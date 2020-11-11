import React, { useRef, useLayoutEffect } from 'react';
import Places from 'places.js';

const WeatherForecast = ({
  setSearchedLocation,
  setSearchedLatLong,
  setWeatherForecast,
}) => {
  const inputRef = useRef({});

  useLayoutEffect(() => {
    const PlaceSearch = new Places({
      type: 'city',
      container: inputRef.current,
    });

    PlaceSearch.on('change', (e) => {
      setSearchedLocation(e.suggestion);
      setSearchedLatLong(e.suggestion.latlng);
    });

    PlaceSearch.on('clear', () => {
      setSearchedLatLong();
      setWeatherForecast();
    });
  }, []);

  return (
    <main className="w-full mx-auto md:w-1/2">
      <input type="search" ref={inputRef} placeholder="Location..." />
    </main>
  );
};

export default WeatherForecast;

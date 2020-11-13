import React, { useRef, useLayoutEffect } from 'react';
import Places from 'places.js';

const WeatherForecastSearch = ({
  setSearchedLocation,
  setSearchedLatLong,
  setWeatherForecast,
  setLocationName,
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
      setLocationName(e.suggestion.name);
    });

    PlaceSearch.on('clear', () => {
      setSearchedLatLong();
      setWeatherForecast();
    });

    PlaceSearch.on('locate', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setSearchedLatLong(latLng);
          const placesApiUrl = `https://places-dsn.algolia.net/1/places/reverse?aroundLatLng=${position.coords.latitude},${position.coords.longitude}&hitsPerPage=1&language=en`;
          fetch(placesApiUrl)
            .then((response) => response.json())
            .then((data) => setLocationName(`${data.hits[0].locale_names[0]}`));
        });
      }
    });
  }, []);

  return (
    <section>
      <input type="search" ref={inputRef} placeholder="Location..." />
    </section>
  );
};

export default WeatherForecastSearch;

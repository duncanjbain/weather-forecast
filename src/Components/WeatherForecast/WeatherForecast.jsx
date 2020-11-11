import React, { useRef, useLayoutEffect } from 'react';
import Places from 'places.js';

const WeatherForecast = () => {
    const inputRef = useRef({});

    useLayoutEffect(() => {
        const PlaceSearch = new Places({
            type: 'city',
            container: inputRef.current,

          });
          // eslint-disable-next-line no-console
          PlaceSearch.on('change', e => console.log(e.suggestion));
    },[])

  return (
    <main className="w-full mx-auto md:w-1/2">
      <input type="search" ref={inputRef} placeholder="Location..." />
    </main>
  );
};

export default WeatherForecast;

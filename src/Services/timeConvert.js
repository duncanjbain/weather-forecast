const utcToHHMM = (time) => {
    const utcTime = new Date(time * 1e3);
    const addZeroBefore = (n) => {
      return (n < 10 ? '0' : '') + n;
    };
    const currentForecastHour = addZeroBefore(utcTime.getHours());
    const currentForecastMinutes = addZeroBefore(utcTime.getMinutes());
    return `${currentForecastHour}:${currentForecastMinutes}`;
  };

  export default utcToHHMM;
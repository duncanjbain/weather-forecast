const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

const fetchWeatherForecast = async (latLong) => {
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latLong.lat}&lon=${latLong.lng}&exclude=minutely,hourly&appid=${API_KEY}`
    const request = await fetch(openWeatherUrl)
    const weatherForecast = await request.json();
    return weatherForecast
}

export default fetchWeatherForecast
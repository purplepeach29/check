// src/components/WeatherDetails.js
import React from 'react';

const WeatherDetails = ({ weather, wind }) => {
  if (!weather) return <p> </p>;//No weather data available.

  const {
    temp = 'N/A',
    temp_min = 'N/A',
    temp_max = 'N/A',
    humidity = 'N/A'
  } = weather.main;

  const { description = 'No description', icon = '01d' } = weather.weather ? weather.weather[0] : {};
  const { speed = 'N/A', deg = 'N/A' } = wind || {};
 /* const {
    temp = 'N/A',
    temp_min = 'N/A',
    temp_max = 'N/A',
    humidity = 'N/A',
    wind_speed = 'N/A',
    wind_deg = 'N/A',
    weather: weatherInfo = [{ description: 'No description', icon: '01d' }]
  } = weather;
    const { description, icon } = weatherInfo[0];
*/
  return (
    <div className="weather-details">
      <h2>Current Weather</h2>
      <div className="weather-summary">
        <div className='inner'>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
        <p>{description}</p>
        <p>Temperature: {temp}°</p>
        <p>Min Temperature: {temp_min}°</p>
        <p>Max Temperature: {temp_max}°</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {speed} m/s, {deg}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

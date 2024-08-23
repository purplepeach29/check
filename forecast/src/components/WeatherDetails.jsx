// src/components/WeatherDetails.js
import React, { useState, useEffect} from 'react';
const WeatherDetails = ({ weather, wind }) => {
  if (!weather) return <p> </p>;//No weather data available.

  const {
    temp = 'N/A',
    temp_min = 'N/A',
    temp_max = 'N/A',
    humidity = 'N/A'
  } = weather.main;

  const { main = 'No description', icon = '01d' } = weather.weather ? weather.weather[0] : {};
  const { speed = 'N/A', deg = 'N/A' } = wind || {};
    
  
  return (
    <div className="weather-details">
      <h2>Weather Today</h2>
      <div className="weather-summary">
        <div className='inner' >
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={main} />
        <p></p>
        <h3>{main}</h3>
        <h3>Temperature: {temp}°</h3>
        <h3>Min Temperature: {temp_min}°</h3>
        <h3>Max Temperature: {temp_max}°</h3>
        <h3>Humidity: {humidity}%</h3>
        <h3>Wind: {speed} m/s, {deg}°</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

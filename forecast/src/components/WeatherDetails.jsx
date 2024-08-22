// src/components/WeatherDetails.js
import React, { useState, useEffect} from 'react';
import mist from '../assets/mist.jpg';
import defaultimg from '../assets/default.jpg';
import rain from '../assets/rain.jpg';
import haze from '../assets/haze.jpg';

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
  const [backgroundImage, setBackgroundImage] = useState(defaultimg);

//console.log(description);
  useEffect(() => {
  if (weather) {
    switch (description) {
      /*case 'clear':
        setBackgroundImage('clear.jpg');
        break;*/
      case 'clouds':
        setBackgroundImage('clouds.png');
        break;
      case 'haze':
        setBackgroundImage(haze);
        break;
      case 'mist':
        setBackgroundImage(mist);
        break;
      case 'rain' || description.includes('rain'):
          setBackgroundImage(rain);
          break;
      // Add more conditions as needed
      default:
        setBackgroundImage(defaultimg);
    }
  }
}, [weather]);
  return (
    <div className="weather-details">
      <h2>Current Weather</h2>
      <div className="weather-summary">
        <div className='inner' style={{ backgroundImage: `url(${backgroundImage})` }}> 
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

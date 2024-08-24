// src/components/WeatherForecast.js
import React from 'react';

const WeatherForecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="weather-forecast">
      <h2> Upcoming Weather</h2>
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <h3>{day.date}</h3>
          <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} />
          <p>{day.description}</p>
          <p>Average Temp : {day.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;

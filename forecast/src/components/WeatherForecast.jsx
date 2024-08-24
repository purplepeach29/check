// src/components/WeatherForecast.js
import React from 'react';

const WeatherForecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="weather-forecast">
      <h3> Upcoming Weather</h3>
      {forecast.map((day, index) => (
        <div key={index} className="forecast-day">
          <p>{day.date}</p>
          <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} />
          <p>{day.description}</p>
          <p>Average Temp : {day.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;

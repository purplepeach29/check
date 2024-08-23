// src/components/WeatherForm.js
import React, { useState } from 'react';
import '../styles/App.css';

const WeatherForm = ({ onSearch, onUnitChange }) => {
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(city, unit);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    onUnitChange(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className="weather-form">
      <input className='search-bar'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        required
      />
      <button type="submit">🔍</button>
      <div className="unit-toggle">
        <label>
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={handleUnitChange}
          />
          °C
        </label>
        <label>
          <input
            type="radio"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={handleUnitChange}
          />
          °F
        </label>
      </div>
    </form>
  );
};

export default WeatherForm;

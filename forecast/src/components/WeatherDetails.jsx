// src/components/WeatherDetails.js
import React, { useState, useEffect} from 'react';
import tempimg from './../assets/temp.png';
import mintemp from './../assets/mintemp.png';
import maxtemp from './../assets/maxtemp.png';
import humidityimg from './../assets/humidity.png';
import windimg from './../assets/wind.png';

function Attribute({
  image,
  imgclass='',
  name,
  val1,
  sym1,
  val2='',
  sym2=''
}) {
  return (
    <section className="attri">
      <div className='weather-attri'>
        <img src={image} className={imgclass}/>   
        <h3>{name}:</h3> 
      </div>
      <div className='sym-val'>  <h3>{val1}{sym1}</h3>
             <h3>{val2}{sym2}</h3>
      </div>
    </section>
  );
}
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
      <h2> Today</h2>
      <div className="weather-summary">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={main} />
        <h3>{main}</h3>
        <div className='inner'>

      <Attribute
          image={tempimg}
          name="Temp"
          val1={temp} 
          sym1='°'
          
      />
      <Attribute
          image={mintemp}
          name="Min Temp"
          val1={temp_min}
          sym1='°'
      />
      <Attribute
          image={maxtemp}
          name="Max Temp"
          val1={temp_max}
          sym1='°'
      />
      <Attribute
          image={humidityimg}
          imgclass='humidity'
          name="Humidity"
          val1={humidity}
          sym1='%'
      />
      <Attribute
          image={windimg}
          imgclass='wind'
          name="Wind"
          val1={speed}
          sym1='m/s'
          val2={deg}
          sym2='°'

      />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

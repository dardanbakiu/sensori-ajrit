import React from 'react';
import './AirQualityComponent.css'

const AirQualityComponent = (props) => {
  const { aqi, co, no2, o3, pm10, pm25, date } = props;

  let aqiImage;
  if (aqi <= 50) {
    aqiImage = <img src="good.png" alt="Good air quality" />;
  } else if (aqi <= 100) {
    aqiImage = <img src="moderate.png" alt="Moderate air quality" />;
  } else {
    aqiImage = <img src="unhealthy.png" alt="Unhealthy air quality" />;
  }

  return (
    <div className="air-quality-container">
      <div>{date}</div>
      <div>
        <span>{aqi}</span>
        {aqiImage}
      </div>
      <div>
        <div>CO: {co}</div>
        <div>NO2: {no2}</div>
        <div>O3: {o3}</div>
        <div>PM10: {pm10}</div>
        <div>PM25: {pm25}</div>
      </div>
    </div>
  );
};

export default AirQualityComponent;
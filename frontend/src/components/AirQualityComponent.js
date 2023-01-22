import React from 'react';
import './AirQualityComponent.css'
import happiness from './happiness.png';
import moderate from './moderate.png'
import unhealthy from './unhealthy.png'

const AirQualityComponent = (props) => {

  const { aqi, co, no2, o3, pm10, pm25, date } = props;

  let aqiImage;
  if (aqi <= 51) {
    aqiImage = <img src={happiness} width="30px" alt="Good air quality" />;
  } else if (aqi <= 100) {
    aqiImage = <img src={moderate} width="30px" alt="Moderate air quality" />;
  } else {
    aqiImage = <img src={unhealthy} width="30px" alt="Unhealthy air quality" />;
  }

  return (
    <div className="air-quality-container">
      <div>{date}</div>
      <div className='aqi-and-emoticon'>
        <span>{aqi}</span>
        <div>{aqiImage}</div>
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
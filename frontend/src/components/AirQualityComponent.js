import React from 'react';
import './AirQualityComponent.css'
import happiness from './happiness.png';
import moderate from './moderate.png'
import unhealthy from './unhealthy.png'

const AirQualityComponent = (props) => {
  const { aqi, co, no2, o3, pm10, pm25, day } = props;

  function translateDate(dateString) {
    var dateArray = dateString.split(":");
    var date = new Date(dateArray[0]);
    var months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return day + " " + month + " " + year;
}

  let aqiImage;
  let aqiText;
  let aqiConst;
  if (aqi <= 140) {
    aqiImage = <img src={happiness} width="30px" alt="Good air quality" />;
    aqiText = <p style={{color: 'green'}}>Mire</p>
    aqiConst = <p style={{color: 'green'}}>{aqi}</p>
  } else if (aqi <= 200) {
    aqiImage = <img src={moderate} width="30px" alt="Moderate air quality" />;
    aqiText = <p style={{color: 'yellow'}}>Mesatare</p>
    aqiConst = <p style={{color: 'yellow'}}>{aqi}</p>
  } else {
    aqiImage = <img src={unhealthy} width="30px" alt="Unhealthy air quality" />;
    aqiText = <p style={{color: 'red'}}>I demshem</p>
    aqiConst = <p style={{color: 'red'}}>{aqi}</p>
  }

  return (
    <div className="air-quality-container">
      <div>{translateDate(day)}</div>
        <div className='aqi-and-emoticon'>
          <div>
            {aqiConst} <br/>
            {aqiText}
          </div>
          <div>{aqiImage}</div>
        </div>
      <div>
        <div>CO: <b>{co}</b></div>
        <div>NO2: <b>{no2}</b></div>
        <div>O3: <b>{o3}</b></div>
        <div>PM10: {pm10}<b>{pm10}</b></div>
        <div>PM25: <b>{pm25}</b></div>
      </div>
    </div>
  );
};

export default AirQualityComponent;
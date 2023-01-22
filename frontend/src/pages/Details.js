import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import Text from '../components/text/Text'
import Box from '../components/box/Box'
import { LineChart } from 'react-chartkick'
import axios from "../axiosinstance";
import 'chartkick/chart.js'
import {getQualityColor} from '../helper'
import AirQualityComponent from '../components/AirQualityComponent';
import Slider from 'react-slick';
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';


  
const Details = () => {
  const [daily, setDaily] = useState([]);
  const [spiderData, setSpiderData] = useState([]);

  function objectToArray(obj, keys = ['o3','pm10','pm25','so2']) {
    return Object.keys(obj)
        .filter(key => keys.includes(key)) // filter out the keys that don't match the provided keys
        .map((key) => {
            return {
                subject: key,
                A: obj[key],
                B: obj[key],
                fullMark: 100
            };
        });
  }

  useEffect(() => {
    getDailyData()
  }, [])

  const getDailyData = () => {
    axios.post("/airQuality", {time: 'daily'})
    .then(function (response) {
      setDaily(response.data)
      setSpiderData(objectToArray(response.data[0]))

      console.log(objectToArray(response.data[0]))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  return (
    <div>
      <Header />

      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{flex: "0.7", backgroundColor: "white", borderRadius: "10px",height: '230px' , marginRight: "10px", 
        padding: "20px",overflowY: "hidden", overflowX:'scroll', whiteSpace:'nowrap'}}>

          <div style={{display: 'flex', flexWrap: 'nowrap'}}>
            {daily.map((item,key) => (
              <AirQualityComponent {...daily[key]}/>
            ))}
          </div>

        </div>
        <div style={{flex: "0.3", borderRadius: "10px", padding: "20px", backgroundColor:''}}>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={spiderData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 80]} />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
          </div>
      </div>
    </div>
  );
};
  
export default Details;
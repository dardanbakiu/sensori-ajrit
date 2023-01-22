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
import {CSVLink, CSVDownload} from 'react-csv';
import { Doughnut } from 'react-chartjs-2';
import CSVimg from '../components/csv.png'

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
  const [exportData, setExportData] = useState();
  const [doughData, setDoughData] = useState({
    labels: ['no2','o3','pm10','pm25','so2'],
    datasets: [
      {
        data: [300, 50, 100,30,100,20],
        backgroundColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0']
      }
    ]
  })

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

  function fixDoughnutData(obj, keys = ['no2','o3','pm10','pm25','so2']) {
    const values = Object.keys(obj)
    .filter(key => keys.includes(key))
    .map(key => obj[key])
    
    const final = {
      labels: ['no2','o3','pm10','pm25','so2'],
      datasets: [
        {
          data: values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0']
        }
      ]
    }

    setDoughData(final)
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
              <div onClick={() => {
                setSpiderData(objectToArray(daily[key]))
                fixDoughnutData(daily[key])
                
              }} >
              <AirQualityComponent {...daily[key]}/>
              </div>
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

      <div style={{display:'flex'}}>
        <Doughnut
          data={doughData}
          options={{
            maintainAspectRatio: false,
            legend: {
              position: 'right'
            }
          }}
        />


      </div>


      <div>
      <br/><br/>
        <div style={{display: 'flex', alignSelf:'start'}}>
          <CSVLink data={daily}>
          <h3 style={{
            color: 'black',
            textDecoration: 'none !important'
          }}
          >Shkarko te dhenat ne CSV <br/> mundesuar nga <br/> <a href="https://fiek.uni-pr.edu/" target="_blank" rel="noopener noreferrer"> Universiteti i Prishtines</a></h3>
            <br/>
            <img src={CSVimg} width="100px"/>
          </CSVLink>
        </div>
      </div>

    </div>
  );
};
  
export default Details;
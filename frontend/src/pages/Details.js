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
import { Bar, PolarArea } from "react-chartjs-2";
import CSVimg from '../components/csv.png'
import "chart.js/auto";
import Cookies from 'js-cookie';

import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts';

function translateDate(dateString) {
  var dateArray = dateString.split(":");
  var date = new Date(dateArray[0]);
  var months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
  var day = date.getDate();
  var month = months[date.getMonth()];
  var year = date.getFullYear();
  return day + " " + month + " " + year;
}
  
const Details = () => {
  const [daily, setDaily] = useState([]);
  const [spiderData, setSpiderData] = useState([]);
  const [exportData, setExportData] = useState();
  // const [polarData, setPolarData] = useState();
  const [clickedDay, setClickedDay] = useState({
    "aqi": 184,
    "co": 362.95,
    "datetime": "2022-12-26:20",
    "no2": 11.84,
    "o3": 38.11,
    "pm10": 33.85,
    "pm25": 25.39,
    "so2": 2.65,
    "timestamp_local": "2022-12-26T21:00:00",
    "timestamp_utc": "2022-12-26T20:00:00",
    "ts": 1672084800,
    "day": "2022-09-02",
    "qualityName": "Unhealthy"
});
  const [barData, setBarData] = useState({
    // Name of the variables on x-axies for each bar
    labels: ['no2','o3','pm10','pm25','so2'],
    datasets: [
      {
        // Label for bars
        label: "Parametrat e ajrit",
        // Data or value of your each variable
        data: [300, 50, 100,30,100,20],
        // Color of each bar
        backgroundColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
        // Border color of each bar
        borderColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
        borderWidth: 0.5,
      },
    ],
  });
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

    const barFinal = {
      // Name of the variables on x-axies for each bar
      labels: ['no2','o3','pm10','pm25','so2'],
      datasets: [
        {
          // Label for bars
          label: "Parametrat e ajrit",
          // Data or value of your each variable
          data: values,
          // Color of each bar
          backgroundColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
          // Border color of each bar
          borderColor: ['#36A2EB', '#FFCE56','#800080', '#008000', '#88d8b0'],
          borderWidth: 0.5,
        },
      ],
    }

    setBarData(barFinal)
    setDoughData(final)
  }

  useEffect(() => {
    getDailyData()
    const token = Cookies.get('sessionToken');
    // console.log(token)
    // if(!token) {
    //   navigate("/login");
    // }
    // else {
    //   navigate("/details");
    // }
  }, [])

  const getDailyData = () => {
    axios.post("/airQuality", {time: 'daily'})
    .then(function (response) {
      setDaily(response.data)
      setSpiderData(objectToArray(response.data[0]))

      console.log('kqyri atrinutet :', response.data[0])
      setClickedDay(response.data[0])
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
                setClickedDay(daily[key])
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

              <br/>
      <div style={{display:'flex', justifyContent: 'space-between'}}>
      {  <div>
              <div className='aqi-and-emoticon'>
                <div>
                  <p style={{fontSize: '40px'}}>Kualiteti : {clickedDay['aqi']}</p>
                </div>
              </div>
            <div>
              <div style={{fontSize: '40px', color: ''}}>CO: <b>{clickedDay['co']}</b></div>
              <div style={{fontSize: '40px'}}>NO2: <b>{clickedDay['no2']}</b></div>
              <div style={{fontSize: '40px'}}>O3: <b>{clickedDay['o3']}</b></div>
              <div style={{fontSize: '40px'}}>PM10: <b>{clickedDay['pm10']}</b></div>
              <div style={{fontSize: '40px'}}>PM25: <b>{clickedDay['pm25']}</b></div>
            </div>
  
            </div> }

        <div style={{width:'400px'}}>
        <Doughnut
          data={doughData}
          options={{
            maintainAspectRatio: false,
            
          }}
        />
        </div>

        <div>
        <Bar
          data={barData}
          // Height of graph

          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
        </div>

        <div>
         <PolarArea data={barData} />
        </div>
      </div>

      <br/><br/><br/><br/>
      <div>
        <div style={{display: 'flex', justifyContent:'space-evenly'}}>
          <div>
            <p>
              Shkarko Te <br></br> Dhenat Ketu
            </p>
            <CSVLink data={daily}>
              <img src={CSVimg} width="100px"/>
            </CSVLink>
          </div>
        </div>
      </div>

    </div>
  );
};
  
export default Details;
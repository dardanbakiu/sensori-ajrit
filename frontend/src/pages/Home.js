import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import Text from '../components/text/Text'
import Box from '../components/box/Box'
import { LineChart } from 'react-chartkick'
import axios from "../axiosinstance";
import 'chartkick/chart.js'
import {getQualityColor} from '../helper'
import './home.scss'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

  
const Home = () => {
  const [detailedAQI, setDetailedAQI] = useState({})
  const [chartData, setChartData] = useState([{}])
  const [currentQuality, setCurrentQuality] = useState(72);
  const [daily, setDaily] = useState([]);
  const [qualityInWord, setQualityInWord] = useState('Moderate')
  const [qualityColor, setQualityColor] = useState('#f9d26a')
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function translateLongDateToShort(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let monthString = month.toString();
    let dayString = day.toString();
    if (month < 10) {
        monthString = "0" + monthString;
    }
    if (day < 10) {
        dayString = "0" + dayString;
    }
    return year + "-" + monthString + "-" + dayString;
}

  function translateDate(dateString) {
    var dateArray = dateString.split(":");
    var date = new Date(dateArray[0]);
    var months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    return day + " " + month + " " + year;
  }

  function averageAttribute(objects, attribute) {
    let total = 0;
    let count = 0;
    for (const object of objects) {
      if (object.hasOwnProperty(attribute)) {
        total += object[attribute];
        count++;
      }
    }
    return total / count;
  }

  function findEarliestAndLatestObject(arr) {
    let earliest = arr[0];
    let latest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (new Date(arr[i].day) < new Date(earliest.day)) {
        earliest = arr[i];
      }
      if (new Date(arr[i].day) > new Date(latest.day)) {
        latest = arr[i];
      }
    }
    return {earliest: earliest, latest: latest};
  }

  const getChartData = () => {
    axios.get("/chartDailyDate")
    .then(function (response) { 
      let rawData = response.data;

      setChartData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const getDailyData = () => {
    axios.post("/airQuality", {time: 'daily'})
    .then(function (response) {
      console.log(response.data);
      const obj = {
        week: 0, 
        month: 0, 
        year : 0,
      }
      const week = response.data.slice(0,7);
      obj.week = parseInt(averageAttribute(response.data.slice(0,7), 'aqi'));
      obj.month = parseInt(averageAttribute(response.data.slice(0,30), 'aqi'));
      obj.year = parseInt(averageAttribute(response.data.slice(0,365), 'aqi'));

      setDetailedAQI(obj)
      const firstAndLastDay = findEarliestAndLatestObject(response.data);
      console.log('first last: ', firstAndLastDay);
      const earliest = findEarliestAndLatestObject(response.data).earliest.day;
      const oldest = findEarliestAndLatestObject(response.data).latest.day;

      setStartDate(new Date(earliest))
      setEndDate(new Date(oldest))

      setDaily(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const currentAirQuality = () => {
    axios.post("/airQuality")
    .then(function (response) {
      // console.log(response.data);
      setCurrentQuality(response.data.overall_aqi)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function filterByDates(start_date, end_date, arr) {
    let start = new Date(start_date);
    let end = new Date(end_date);
    console.log('before changes : ', [...arr])
    arr.forEach(object => {
        Object.keys(object.data).forEach(key => {
            let itemDate = new Date(key);
            if (!(itemDate >= start && itemDate <= end)) {
                delete object.data[key];
            }
        });
    });

    return arr;
  }

  useEffect(() => {
    currentAirQuality()
    getChartData()
    getDailyData()
  }, [])

  useEffect(() => {
    if(currentQuality >= 0 && currentQuality <= 50) {
      setQualityInWord('Good')
      setQualityColor('#a8e05f')
    }

    if(currentQuality >= 51 && currentQuality <= 100) {
      setQualityInWord('Moderate')
      setQualityColor('#f9d26a')
    }

    if(currentQuality >= 101 && currentQuality <= 150) {
      setQualityInWord('Unhealthy for Sensitive Groups')
      setQualityColor('#a8e05f')
    }

    if(currentQuality >= 151 && currentQuality <= 200) {
      setQualityInWord('Unhealthy')
      setQualityColor('#c09ff8')
    }

    if(currentQuality >= 201 && currentQuality <= 300) {
      setQualityInWord('Very Unhealthy')
      setQualityColor('#c6538c')
    }

    if(currentQuality > 300) {
      setQualityInWord('Hazardous')
      setQualityColor('#c6538c')
    }
  }, [currentQuality])

  return (

    <div>
      <Header />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box background={qualityColor} w='1000px' h="200px" padding='32px'>
          <div
          style={{width:'100%', height:'100%', display: 'flex', justifyContent:'space-between'}}>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center' }}>
              <div style={{backgroundColor : '#87c13c', width:'130px', height:'150px', borderRadius:'30px', color:'white',
                  display:'flex', flexDirection:'column', justifyContent: 'space-around', padding: '0 20px'}}>
                    
                    <p>FIEK AQ</p>
                    <p style={{fontWeight:'500', lineHeight:'40px', fontSize:'34px'}}
                    >{currentQuality}</p>
              </div>
              <div style={{color: '#607631', padding: '0 20px', display:'flex',height:'150px', flexDirection:'column', justifyContent: 'space-evenly'}}>
                <p>LIVE FIEK AQ</p>
                <p style={{fontSize:'30px'}}
                >{qualityInWord}</p>
              </div>
            </div>
            <div> <img src='https://www.iqair.com/assets/aqi/ic-face-green.svg' alt='face'  width={116}/> </div>
          </div>
        </Box>  
      </div>

      <div style={{display:'flex', justifyContent: 'space-evenly', padding: '20px 0'}}>
      <Box background={getQualityColor(detailedAQI.week)}> 
          <Text color="white" weight='800' content='Jave' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content={detailedAQI.week} size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='AQI'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Very Unhealthy' position='center' size='20px'/>
            </div>
          </Box> 

          <Box background={getQualityColor(detailedAQI.month)}> 
          <Text color="white" weight='800' content='Muaj' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content={detailedAQI.month} size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='AQI'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Very Unhealthy' position='center' size='20px'/>
            </div>
          </Box>  

          <Box background={getQualityColor(detailedAQI.year)}> 
          <Text color="white" weight='800' content='Vit' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content={detailedAQI.year} size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='AQI'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Unhealthy' position='center' size='20px'/>
            </div>
          </Box> 
      </div>
      
      <div style={{margin: '30px 10%'}}>
        <div style={{display: 'flex', justifyContent:'space-evenly', width:'40%'}}>
          <div>Dita Startuese: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> </div>
          <div>Dita Perfundimtare: <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></div>
          <button style={{width: '80px', height:'30px', alignSelf:'end'}} onClick={() => {
            const startingDate = translateLongDateToShort(startDate)
            const endingDate = translateLongDateToShort(endDate)
            
            console.log(filterByDates(startingDate, endingDate, chartData))
          }}> Filtro </button>
        </div>
        <LineChart data={chartData} />
        <p style={{color:'red', borderRadius:'10px',border:'1px solid red', padding: '5px 10px', fontSize:'14px', margin:'10px 0'}}>Mohim përgjegjësie: Asnjë premtim, garanci ose garanci nuk ofrohet në lidhje me të dhënat e shfaqura në këtë faqe interneti. Është përgjegjësi e përdoruesve të këtyre të dhënave të verifikojnë saktësinë e të dhënave dhe operatorët e kësaj faqeje nuk marrin asnjë përgjegjësi për vendimet ose veprimet e ndërmarra nga përdoruesit e këtyre të dhënave.</p>
      </div>

      <div style={{margin: '30px 10%', display:'flex', justifyContent:'center'}}>
          <div style={{backgroundColor:'white', width:'100%', height:'500px', borderRadius:'30px', overflowY:'auto',overflowX:'hidden'}}>
            {daily.slice(0, 5).map((el, key)=>(
              <div key={key} style={{width:'100%', height:'20px', backgroundColor:getQualityColor(el.aqi), justifyContent:'space-around',color:'white',padding:'20px 20px', 
              display:'flex', fontSize:'20px', fontWeight:600 }}>
                <p>{translateDate(el.day)} </p>
                <p>AQI : {el.aqi}</p>
                <p>pm25 : {el.pm25}</p>
                <p>pm10 : {el.pm10}</p>
              </div>
            ))}

            <p style={{color:'red', borderRadius:'10px',border:'1px solid red', padding: '5px 10px', fontSize:'14px', margin:'10px 0'}}>
              Per me shume te dhena kontaktoni fiek@uni-pr.edu.
            </p>
          </div>
      </div>
    
    </div>
  );
};
  
export default Home;
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import Text from '../components/text/Text'
import Box from '../components/box/Box'
import { LineChart } from 'react-chartkick'
import axios from "../axiosinstance";
import 'chartkick/chart.js'
  
const Home = () => {
  const [chartData, setChartData] = useState([{}])
  const [currentQuality, setCurrentQuality] = useState(72);
  const [qualityInWord, setQualityInWord] = useState('Moderate')
  
  useEffect(() => {
    // axios.get("/airQuality")
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    const data = [
      {
        "name":"Workout", 
        "data": {
          "2021-01-01": 3,
          "2021-01-02": 4
        }
      },

      {
        "name":"Call parents",
        "data": 
          {
            "2021-01-01": 5, 
            "2021-01-02": 3
          }
      }
    ];

    setChartData(data)
  }, [])

  useEffect(() => {
    if(currentQuality >= 0 && currentQuality <= 50) {
      setQualityInWord('Good')
    }

    if(currentQuality >= 51 && currentQuality <= 100) {
      setQualityInWord('Moderate')
    }

    if(currentQuality >= 101 && currentQuality <= 150) {
      setQualityInWord('Unhealthy for Sensitive Groups')
    }

    if(currentQuality >= 151 && currentQuality <= 200) {
      setQualityInWord('Unhealthy')
    }

    if(currentQuality >= 201 && currentQuality <= 300) {
      setQualityInWord('Very Unhealthy	')
    }

    if(currentQuality > 300) {
      setQualityInWord('Hazardous')
    }
  }, [currentQuality])

  return (

    <div>
      <Header />
      <Text 
        position='center'
        padding='20px 0'
        size='50px'
        content='Rezultati i Performancës së Ndotjes'
      />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box background='#a8e05f' w='1000px' h="200px" padding='32px'>
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
      <Box background='#c6538c'> 
          <Text color="white" weight='800' content='Tani' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content='56' size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='microgram'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Good' position='center' size='20px'/>
            </div>
          </Box> 

          <Box background='#c09ff8'> 
          <Text color="white" weight='800' content='Tani' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content='56' size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='microgram'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Good' position='center' size='20px'/>
            </div>
          </Box>  

          <Box background='#f9d26a'> 
          <Text color="white" weight='800' content='Sot' position='center'/>
            <div style={{
                color:'white',
                backgroundColor: 'inherit',
                display: 'flex',
                alignItems: 'center'
            }}> 
              
              <div style={{margin: '0 5px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='600' content='56' size='45px'/>
              </div>

              <div style={{margin: '0 10px', backgroundColor: 'inherit'}}>
                <Text color="white" weight='800' content='microgram'/>
              </div>
            </div>
            
            <div style={{margin: '0px', backgroundColor: 'inherit'}}>
              <Text color="white" weight='800' content='Good' position='center' size='20px'/>
            </div>
          </Box> 
      </div>

      <LineChart data={chartData} />
    
    </div>
  );
};
  
export default Home;
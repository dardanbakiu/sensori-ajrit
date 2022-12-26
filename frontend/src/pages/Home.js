import React from 'react';
import Header from '../components/header/Header'
import Text from '../components/text/Text'
import Box from '../components/box/Box'
  
const Home = () => {
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
                    >40</p>
              </div>
              <div style={{color: '#607631', padding: '0 20px', display:'flex',height:'150px', flexDirection:'column', justifyContent: 'space-evenly'}}>
                <p>LIVE FIEK AQ</p>
                <p style={{fontSize:'30px'}}
                >Good</p>
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
    
    </div>
  );
};
  
export default Home;
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
        <Box background='#57bf9c' w='100%'>

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
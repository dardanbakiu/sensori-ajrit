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

      <div>
        <div style={{display:'flex', justifyContent: 'space-evenly', padding: '20px 0'}}>
          <Box background='#57bf9c'> 
            <p>hellow rold</p>
          </Box>

          <Box background='#57bf9c'> 
            <p>hellow rold</p>
          </Box>
        </div>

        <div style={{display:'flex', justifyContent: 'space-evenly', padding: '20px 0'}}>
          <Box background='#57bf9c'> 
            <p>hellow rold</p>
          </Box>
          <Box background='#57bf9c'> 
            <p>hellow rold</p>
          </Box>
        </div>
      </div>
    
    </div>
  );
};
  
export default Home;
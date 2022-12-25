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

      <Box>
        <p>hello world</p>
      </Box>
    </div>
  );
};
  
export default Home;
import React from 'react';
import './box.scss'

const Box = ({children, background='white'}) => {
  return (
    <div 
    style={{
      backgroundColor: 'red',
      color:'red'

    }}
    >
       {children}
    </div>
  );
};
  
export default Box;
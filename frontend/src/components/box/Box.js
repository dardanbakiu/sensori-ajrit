import React from 'react';
import './box.scss'

const Box = ({children, background='white'}) => {
  return (
    <div 
    style={{
      backgroundColor: background,
      color:'red'
    }}
    >
       {children}
    </div>
  );
};
  
export default Box;
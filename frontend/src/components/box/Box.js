import React from 'react';
import './box.scss'

const Box = ({children, background='white', w, h}) => {
  return (
    <div 
      style={{
        backgroundColor: background ? background : 'black',
        width: w ? w : 'default',
        height: h ? h : 'default'
      }}
    >
       {children}
    </div>
  );
};
  
export default Box;
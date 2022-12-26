import React from 'react';

const Box = ({constant, children, 
        background='black', w, h}) => {

  return (
    <div 
      style={{
        display: 'flex',
      }}
    >
      <div className='box-body'
        style={{
          backgroundColor: background ? background : 'black',
          width: w ? w : 'default',
          height: h ? h : 'default',
          borderRadius: '30px',
          padding: '20px 20px'
        }}
      >
        
        {children}
      </div>
    </div>
  );
};
  
export default Box;
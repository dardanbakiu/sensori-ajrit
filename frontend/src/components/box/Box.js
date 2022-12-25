import React, { useEffect, useState } from 'react';
// import './box.scss'

const Box = ({children, background='white', w, h, position="center"}) => {
  const [modifiedPosition, setModifiedPosition] = useState('');
  useEffect(() => {
    if(position === 'left') {
      setModifiedPosition('flex-start')
    }

    if(position === 'right') {
      setModifiedPosition('flex-end')
    }

    if(position === 'center') {
      setModifiedPosition('center')
    }
  }, [position])
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: modifiedPosition
      }}
    >
      <div className='box-body'
        style={{
          backgroundColor: background ? background : 'black',
          width: w ? w : 'default',
          height: h ? h : 'default',
          color: 'white'
        }}
      >
        {children}
      </div>
    </div>
  );
};
  
export default Box;
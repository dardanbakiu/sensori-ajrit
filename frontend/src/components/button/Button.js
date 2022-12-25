import React from 'react';
import './button.scss'

const Button = ({name, color}) => {
  return (
    <div className=''>
        <button style={{
          // color:'white',
          backgroundColor: color
        }}>
          {name}
        </button>
    </div>
  );
};
  
export default Button;
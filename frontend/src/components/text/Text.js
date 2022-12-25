import React, { useEffect, useState } from 'react';

const Text = ({weight, size, position, color, padding, content='Sample Text'}) => {
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
    <div className=''>
        <p style={{
          color: color ? color : 'white',
          fontSize: size ? size : '16px',
          fontWeight: weight ? weight : 100,
          display: 'flex',
          justifyContent: position ? modifiedPosition : 'center',
          padding: padding ? padding : '0px',
        }}>
          
          {content}
        </p>
    </div>
  );
};
  
export default Text;
import React, { useEffect, useState } from 'react';

const Text = ({weight, size, position, color, content='Sample Text'}) => {
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
          size: size ? size : '16px',
          fontWeight: weight ? weight : 100,
          display: 'flex',
          justifyContent: position ? modifiedPosition : 'center'
        }}>
          
          {content}
        </p>
    </div>
  );
};
  
export default Text;
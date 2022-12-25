import React from 'react';

const Box = ({constant, 
        background='black', w, h}) => {

  // const [modifiedPosition, setModifiedPosition] = useState('');
  // useEffect(() => {
  //   if(position === 'left') {
  //     setModifiedPosition('flex-start')
  //   }

  //   if(position === 'right') {
  //     setModifiedPosition('flex-end')
  //   }

  //   if(position === 'center') {
  //     setModifiedPosition('center')
  //   }
  // }, [position])
  return (
    <div 
      style={{
        display: 'flex',
        // justifyContent: modifiedPosition,
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
        
        <div style={{
          display: 'flex'
        }}>
        </div>
      </div>
    </div>
  );
};
  
export default Box;
import React from 'react';
import './header.scss'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='title'>
          <p>Universiteti i Prishtines</p>
          <p>Kualiteti i Ajrit</p>
        </div>

        <img 
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/University_of_Prishtina_logo.svg' 
          // src='https://alchetron.com/cdn/universiteti-i-prishtins-c1a59abe-73d0-4aee-9035-088397153d7-resize-750.jpg'
          alt='uni' 
        />
      </div>

      <hr
        style={{
            color: 'green',
            backgroundColor: 'green',
            height: 5,
            margin: '0'
        }}
      />
    </div>
  );
};
  
export default Header;
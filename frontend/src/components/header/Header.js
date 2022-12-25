import React from 'react';
import './header.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='title'>
          <h1>Universiteti i Prishtines</h1>
          <h1>Kualiteti i Ajrit</h1>
        </div>

        <img 
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/University_of_Prishtina_logo.svg' 
          // src='https://alchetron.com/cdn/universiteti-i-prishtins-c1a59abe-73d0-4aee-9035-088397153d7-resize-750.jpg'
          alt='uni' 
        />
    </div>
  );
};
  
export default Header;
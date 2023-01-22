import React from 'react';
import './header.scss'
import Text from '../text/Text'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();

  function navigateToDetails() {
    const token = Cookies.get('sessionToken');
    console.log(token)
    if(!token) {
      navigate("/login");
    }
    else {
      navigate("/details");
    }
  }

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

<div style={{
        display:'flex',
        justifyContent: 'space-evenly'
      }}>
        <div className='nav-tab'>
          <Text 
            position='center'
            padding='20px 0'
            size='20px'
            content='Rezultati i Performancës së Ndotjes'
          />
        </div>

        <div 
          className='nav-tab'
          onClick={()=>navigateToDetails()}
          >
          <Text 
            position='center'
            padding='20px 0'
            size='20px'
            content='Pamja e ekspertit'
          />
        </div>
      </div>
    </div>
  );
};
  
export default Header;
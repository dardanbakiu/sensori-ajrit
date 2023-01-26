import React, {useState} from 'react';
import axios from "../axiosinstance";
import './login.scss'
import Cookies from 'js-cookie';
import Header from '../components/header/Header'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {

    axios.post("/login", {
      email: email,
      password: password
    }).then(({data}) => {
      console.log('here we got an error : ', data)
      Cookies.set('sessionToken', data.token, { expires: 1/1440, secure: true }); //1min token
      navigate('/details')
      // const token = Cookies.get('sessionToken');
      // Cookies.remove('sessionToken');
      setError('')
    }).catch((err) => {
      setError('Kredencialet jane gabim!')
    })
  }

  return (
  <div>
    <Header/>
    <div
      style={{
        marginTop:'100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
      <h1>Login</h1>

      <div className='login-container'>
        <label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        
        <p style={{color:'red'}}>{error}</p>
        <br />
        <button onClick={handleSubmit}>Login</button>

        <br/>
      </div>


      <p>Per te hapur nje llogari kontaktoni ne fiek@uni-pr.edu</p>
    </div>
  </div>
  );
};
  
export default Home;
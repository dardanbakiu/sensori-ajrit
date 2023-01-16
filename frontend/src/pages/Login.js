import React, {useState} from 'react';
import axios from "../axiosinstance";
  
const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log('Login : ', email, password)

    axios.post("/login", {
      email: email,
      password: password
    }).then((data) => {
      console.log("login DATA :  ", data);
    });
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Login</h1>
      <div style={{
        width: '300px'
      }}>
        <input type="text" onChange={e => setEmail(e.target.value)} name="email" placeholder='email'/>
        <input type="text" onChange={e => setPassword(e.target.value)} name="password" placeholder='password'/>
        <button onClick={ login }>Login</button>
      </div>
    </div>
  );
};
  
export default Home;
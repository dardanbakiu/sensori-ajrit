import React, {useState} from 'react';
import axios from "../axiosinstance";
import './login.scss'
  
const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    // console.log('Login : ', email, password)

    axios.post("/login", {
      email: email,
      password: password
    }).then((data) => {
      console.log(data.status)
    });
  }

  return (
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
        <br />
        <button onClick={handleSubmit}>Login</button>

        <br/>

        <p>{error}</p>
      </div>

    </div>
  );
};
  
export default Home;
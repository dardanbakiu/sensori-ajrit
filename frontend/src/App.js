import React, { useEffect } from "react";
import axios from "./axiosinstance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  useEffect(() => {
    axios.get("/test").then((data) => {
      console.log("ktu i kena disa te dhena : ", data);
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

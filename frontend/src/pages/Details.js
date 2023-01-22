import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import Text from '../components/text/Text'
import Box from '../components/box/Box'
import { LineChart } from 'react-chartkick'
import axios from "../axiosinstance";
import 'chartkick/chart.js'
import {getQualityColor} from '../helper'
import './home.scss'
  
const Details = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
  
export default Details;
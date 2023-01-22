const axios = require("axios");
const {daily, chartDataArr} = require('./DaysAirQuality');

const airQuality = (req, res) => {
  const {time} = req.body

  if(time === 'daily') {
    res.json(daily);
    return;
  }

  const options = {
    method: 'GET',
    url: 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality',
    params: {lat: '42.662914', lon: '21.165503', city: 'Seattle'},
    headers: {
      'X-RapidAPI-Key': '935f9d0ca5msh72259dceb530454p10ccc6jsnd4e2cba604bb',
      'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    res.json(response.data)
  }).catch(function (error) {
    res.json(error);
  });
}

const chartData = (req, res) => {
  res.json(chartDataArr)
}

module.exports = {
  airQuality,
  chartData
};
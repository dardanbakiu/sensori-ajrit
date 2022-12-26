const axios = require("axios");
const daily = require('./DaysAirQuality');

const airQuality = (req, res) => {
  const {time} = req.body
  console.log('hello world first para return')
  if(time === 'daily') {
    res.json(daily);
    return;
  }

  console.log('qetu jena mas reutrnit');

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
  
}

module.exports = {
  airQuality
};
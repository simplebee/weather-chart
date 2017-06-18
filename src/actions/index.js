import axios from 'axios';
import * as actionType from '../actions/action-type';

export function fetchWeather(city) {
  const url = 'http://api.openweathermap.org/data/2.5/forecast';
  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_APIKEY;
  
  const response = axios.get(url, {
    params: {
      q: city,
      appid: apiKey
    }
  });

  console.log(response);

  return {
    type: actionType.FETCH_WEATHER,
    payload: response
  };
}
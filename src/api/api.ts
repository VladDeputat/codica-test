//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q="london"&appid=15d86838db3a3dd104d6b0c5875de11c`;

import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/";
const APIKEY = '15d86838db3a3dd104d6b0c5875de11c'

export const cityWeatherApi = {
  getCityWeather: (cityName: string) => {
    return axios.get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}`).then((res) => res.data);
  },
};
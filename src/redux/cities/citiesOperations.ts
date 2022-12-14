import { AppDispatch } from '../store';
import axios from 'axios';
import { citiesSlice } from './citiesSlice';

axios.defaults.baseURL = 'https://api.openweathermap.org/';
const APIKEY = '15d86838db3a3dd104d6b0c5875de11c';

const getCityWeather = (cityName: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios
      .get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
      .then(res => res.data);

    const cityData = {
      city: res.name,
      data: res,
    };

    await dispatch(citiesSlice.actions.getCityWeather(cityData));
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const refreshCityWeather =
  (cityName: string) => async (dispatch: AppDispatch) => {
    try {
      const res = await axios
        .get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
        .then(res => res.data);

      const cityData = {
        city: res.name,
        data: res,
      };

      await dispatch(citiesSlice.actions.refreshCityWeather(cityData));
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
const deleteCityWeather =
  (cityName: string) => async (dispatch: AppDispatch) => {
    try {
      await dispatch(citiesSlice.actions.deleteCityWeather(cityName));
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

const getSingleCityWeather =
  (cityName: string) => async (dispatch: AppDispatch) => {
    try {
      const res = await axios
        .get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}&units=metric`)
        .then(res => res.data);

      const cityData = {
        city: res.name,
        data: res,
      };

      await dispatch(citiesSlice.actions.getSingleCityWeather(cityData));
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

export {
  getCityWeather,
  refreshCityWeather,
  deleteCityWeather,
  getSingleCityWeather,
};

// {
//     "coord": {
//         "lon": -0.1257,
//         "lat": 51.5085
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 275.37,
//         "feels_like": 275.37,
//         "temp_min": 273.29,
//         "temp_max": 276.62,
//         "pressure": 1008,
//         "humidity": 78
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0.45,
//         "deg": 297,
//         "gust": 0.89
//     },
//     "clouds": {
//         "all": 9
//     },
//     "dt": 1670514621,
//     "sys": {
//         "type": 2,
//         "id": 2075535,
//         "country": "GB",
//         "sunrise": 1670485966,
//         "sunset": 1670514733
//     },
//     "timezone": 0,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
// }

import { AppDispatch } from "../store";
import axios from "axios";
import { citiesSlice } from "./citiesSlice";

axios.defaults.baseURL = "https://api.openweathermap.org/";
const APIKEY = "15d86838db3a3dd104d6b0c5875de11c";

const getCityWeather = (cityName: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}`).then((res) => res.data);

    const cityData = {
      city: res.name,
      data: res,
    };

    await dispatch(citiesSlice.actions.getCityWeather(cityData));
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const refreshCityWeather = (cityName: string) => async (dispatch: AppDispatch) => {
  try {
    const res = await axios.get(`data/2.5/weather?q=${cityName}&appid=${APIKEY}`).then((res) => res.data);

    const cityData = {
      city: res.name,
      data: res,
    };

    await dispatch(citiesSlice.actions.refreshCityWeather(cityData));
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteCityWeather = (cityName: string) => async (dispatch: AppDispatch) => {
  try {
  
    await dispatch(citiesSlice.actions.deleteCityWeather(cityName));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// const getCityWeather = () => (dispatch:AppDispatch) => {
//   dispatch(getCityRequest());
//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(getCitySuccess(data)))
//     .catch((error: AxiosError) => dispatch(getCityError(error.message)));
// };

export { getCityWeather, refreshCityWeather, deleteCityWeather };

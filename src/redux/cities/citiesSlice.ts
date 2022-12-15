import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CitiesState, CityObj } from '../../helpers/types';

const initialState: CitiesState = {
  allCities: [],
  curCity: {
    city: '',
    data: {
      weather: [
        {
          icon: '',
          description: '',
        },
      ],
      main: {
        temp: 0,
        humidity: 0,
        pressure: 0,
        feels_like: 0,
      },
      wind: {
        deg: 0,
        speed: 0,
      },
      sys: {
        sunrise: 0,
        sunset: 0,
      },
    },
  },
  cityNames: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getCityWeather: (state, action: PayloadAction<CityObj>) => {
      if (!state.cityNames.includes(action.payload.city)) {
        state.allCities = [...state.allCities, action.payload];
        state.cityNames = [...state.cityNames, action.payload.city];
      } else {
        state.allCities = [...state.allCities];
        throw new Error('You already added this city');
      }
    },
    refreshCityWeather: (state, action: PayloadAction<CityObj>) => {
      const { payload } = action;
      const index = state.allCities.findIndex(
        (obj: CityObj) => obj.city === payload.city,
      );
      state.allCities[index] = action.payload;
    },
    deleteCityWeather: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.allCities = state.allCities.filter(
        (el: CityObj) => el.city !== payload,
      );
      state.cityNames = state.cityNames.filter(
        cityName => cityName !== payload,
      );
    },
    getSingleCityWeather: (state, action: PayloadAction<CityObj>) => {
      state.curCity = action.payload;
    },
  },
});

export const {
  getCityWeather,
  refreshCityWeather,
  deleteCityWeather,
  getSingleCityWeather,
} = citiesSlice.actions;

export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;

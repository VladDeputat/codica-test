import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { CitiesState, CityObj } from "../../helpers/types";

// Define the initial state using that type
const initialState: CitiesState = {
  allCities: [],
  curCity: {},
};

export const citiesSlice = createSlice({
  name: "cities",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getCityWeather: (state, action: PayloadAction<CityObj>) => {
      if (!state.allCities.map((cityObj: any) => cityObj.city).includes(action.payload.city)) {
        state.allCities = [...state.allCities, action.payload];
      } else {
        state.allCities = [...state.allCities];
        throw new Error("You already added this city");
      }
    },
    refreshCityWeather: (state, action: PayloadAction<CityObj>) => {
      const { payload } = action;
      const index = state.allCities.findIndex((obj: any) => obj.city === payload.city);
      state.allCities[index] = action.payload;
    },
    deleteCityWeather: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.allCities = state.allCities.filter((el: any) => el.city !== payload);
    },
  },
});

export const { getCityWeather, deleteCityWeather } = citiesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;

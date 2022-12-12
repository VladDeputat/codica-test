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
        throw new Error("You already added this city")
      }

    },
  },
});

export const { getCityWeather } = citiesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCities = (state: RootState) => state.cities;

export default citiesSlice.reducer;

// import { createAction } from "@reduxjs/toolkit";

// export const getCityRequest = createAction("cities/getCityRequest");
// export const getCitySuccess = createAction("cities/getCitySuccess");
// export const getCityError = createAction("cities/getCityError");

// export const addCityRequest = createAction("cities/addCityRequest");
// export const addCitySuccess = createAction("cities/addCitySuccess");
// export const addCityError = createAction("cities/addCityError");

// export const deleteCityRequest = createAction("cities/deleteCityRequest");
// export const deleteCitySuccess = createAction("cities/deleteCitySuccess");
// export const deleteCityError = createAction("cities/deleteCityError");

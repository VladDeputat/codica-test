import { RootState } from '../store';

export const selectAllCitiesData = (state: RootState) => state.cities.allCities;

export const selectAllCitiesNames = (state: RootState) =>
  state.cities.cityNames;

export const selectCurCityData = (state: RootState) => state.cities.curCity;

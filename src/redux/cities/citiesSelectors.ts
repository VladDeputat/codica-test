import { RootState } from "../store";

export const selectAllCitiesData = (state: RootState) => state.cities.allCities;

export const selectAllCitiesNames = (state: RootState) => state.cities.allCities.map((cityObj: any) => cityObj.city);

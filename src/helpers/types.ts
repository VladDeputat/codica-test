export interface CitiesState {
  allCities: CityObj[];
  curCity: CityObj;
  cityNames: string[];
}

export interface CityObj {
  city: string;
  data: {
    weather: [
      {
        icon: string;
        description: string;
      },
    ];
    main: {
      temp: number;
      humidity: number;
      pressure: number;
      feels_like: number;
    };
    wind: {
      deg: number;
      speed: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
}

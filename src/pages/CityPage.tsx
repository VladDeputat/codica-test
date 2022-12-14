import { Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  getWindDirection,
  getHoursAndMinutesFromUnix,
} from '../helpers/functions';
import { selectCurCityData } from '../redux/cities/citiesSelectors';
import { getSingleCityWeather } from '../redux/cities/citiesOperations';
import { useParams } from 'react-router';

const BorderedTypography: React.FC<{
  paramName: string;
  param: string | number;
}> = ({ paramName, param }) => {
  return (
    <Typography
      component="div"
      sx={{
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <p>{paramName}</p>
      <p>{param}</p>
    </Typography>
  );
};

const CityPage = () => {
  const dispatch = useAppDispatch();
  const curCity = useAppSelector(selectCurCityData);
  const { city: paramsCity } = useParams();
  useEffect(() => {
    if (paramsCity) dispatch(getSingleCityWeather(paramsCity));
  }, [paramsCity, dispatch]);

  const { city, data } = curCity;

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: 40, fontWeight: 500 }} color="text.main">
        {city}
      </Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <img
          width={150}
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        <Box>
          <Typography variant="h4" component="div">
            {Math.round(data.main.temp)}&#8451;
          </Typography>
          <Typography variant="h5" component="div">
            <p>Feels like</p>
            {Math.round(data.main.feels_like)}&#8451;
          </Typography>
        </Box>
      </Box>
      <Box maxWidth={200} sx={{ margin: '0 auto' }}>
        <Typography
          variant="h6"
          mb={2}
          sx={{
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          {data.weather[0].description}
        </Typography>
        <BorderedTypography
          paramName="Humidity:"
          param={data.main.humidity + '%'}
        />
        <BorderedTypography paramName="Pressure:" param={data.main.pressure} />
        <BorderedTypography
          paramName="Wind:"
          param={`${getWindDirection(data.wind.deg)} ${data.wind.speed} km/h`}
        />
        <BorderedTypography
          paramName="Sunrise:"
          param={getHoursAndMinutesFromUnix(data.sys.sunrise)}
        />
        <BorderedTypography
          paramName="Sunset:"
          param={getHoursAndMinutesFromUnix(data.sys.sunset)}
        />
      </Box>
    </Box>
  );
};

export default CityPage;

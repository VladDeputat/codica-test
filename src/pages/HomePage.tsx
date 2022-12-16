import {
  AppBar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import React, { useState } from 'react';
import CityCard from '../components/CityCard';
import { CityObj } from '../helpers/types';
import { getCityWeather } from '../redux/cities/citiesOperations';
import {
  selectAllCitiesData,
  // selectAllCitiesNames,
} from '../redux/cities/citiesSelectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const citiesDataArr = useAppSelector(selectAllCitiesData);
  // const citiesSelected = useAppSelector(selectAllCitiesNames);
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   if (citiesSelected.length > 0) {
  //     citiesSelected.forEach(cityName => {
  //       dispatch(getCityWeather(cityName));
  //     });
  //   }
  // }, [citiesSelected, dispatch]);

  const handleSearch = () => {
    dispatch(getCityWeather(query));
    setQuery('');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid container justifyContent="center" my={3}>
          <TextField
            id="outlined-basic"
            label="Search city"
            variant="outlined"
            onChange={e => setQuery(e.target.value)}
            sx={{ bgcolor: '#eaeef5' }}
            value={query}
            data-testid="homeInput"
          />
          <Button
            onClick={handleSearch}
            variant="contained"
            color="success"
            size="large"
            data-testid="homeInputButton"
          >
            Add
          </Button>
        </Grid>
      </AppBar>
      <Grid container justifyContent="center" my={10}>
        {!!citiesDataArr.length && citiesDataArr.length > 0 ? (
          citiesDataArr.map((cityObj: CityObj) => (
            <CityCard key={cityObj.city} {...cityObj} />
          ))
        ) : (
          <Typography variant="h6" color="#555555">
            You haven't added any city yet
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;

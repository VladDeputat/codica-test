import { AppBar, Box, Button, Container, Grid, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { cityWeatherApi } from "../api/api";
import CityCard from "../components/CityCard";
import { CityObj } from "../helpers/types";
import { getCityWeather } from "../redux/cities/citiesOperations";
import { selectAllCitiesData } from "../redux/cities/citiesSelectors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const citiesArr = useAppSelector(selectAllCitiesData);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    dispatch(getCityWeather(query));
    setQuery('')
  };

console.log(citiesArr);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Grid container justifyContent="center" my={3}>
          <TextField
            id="outlined-basic"
            label="Search city"
            variant="outlined"
            onChange={(e) => setQuery(e.target.value)}
            sx={{ bgcolor: "#eaeef5" }}
            value={query}
          />
          <Button onClick={handleSearch} variant="contained" color="success" size="large">
            Add
          </Button>
        </Grid>
      </AppBar>
      <Grid container justifyContent="center" my={10}>
        {!!citiesArr.length && citiesArr.length > 0 ? (
          citiesArr.map((cityObj:any) => <CityCard key={cityObj.city} {...cityObj} />)
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

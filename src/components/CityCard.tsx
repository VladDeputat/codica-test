import React from "react";
import { Card, CardContent, Typography, CardActions, Button, Box, Zoom, Link } from "@mui/material";
import { DeleteOutline, RefreshOutlined } from "@mui/icons-material";
import { deleteCityWeather, refreshCityWeather } from "../redux/cities/citiesOperations";
import { useAppDispatch } from "../redux/hooks";
import { getHoursAndMinutesFromUnix, getWindDirection } from "../helpers/functions";

const CityCard = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { city, data } = props;
  console.log(props);

  const handleDeleteCity = () => {
    dispatch(deleteCityWeather(props.city));
  };
  const handleRefreshCity = () => {
    dispatch(refreshCityWeather(props.city));
  };

  return (
    <>
      <Card sx={{ minWidth: 200, marginLeft: "20px" }}>
        <Link href={city} sx={{ textDecoration: "none", color: "#555555" }}>
          <CardContent>
            <Typography sx={{ fontSize: 24, fontWeight: 500 }} color="text.main">
              {city}
            </Typography>
            <Box sx={{ display: "flex", textAlign: "center" }}>
              <img
                width={100}
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
              />
              <Box>
                <Typography variant="h5" component="div">
                  {Math.round(data.main.temp)}&#8451;
                </Typography>
                <Typography component="div">
                  <p>Feels like</p>
                  {Math.round(data.main.feels_like)}&#8451;
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ textTransform: "capitalize", textAlign: "center" }}>
              {data.weather[0].description}
            </Typography>
            {/* <Box>
          <Typography component="div">
            <p>Humidity</p>
            {data.main.humidity}&#37;
          </Typography>
          <Typography component="div">
            <p>Pressure</p>
            {data.main.pressure}
          </Typography>
          <Typography component="div">
            <p>Wind</p>
            {getWindDirection(data.wind.deg)} {data.wind.speed} km/h
          </Typography>
          <Typography component="div">
            <p>Sunrise</p>
            {getHoursAndMinutesFromUnix(data.sys.sunrise)}
          </Typography>
          <Typography component="div">
            <p>Sunset</p>
            {getHoursAndMinutesFromUnix(data.sys.sunset)}
          </Typography>
        </Box> */}
          </CardContent>
        </Link>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button size="small" onClick={handleDeleteCity}>
            <DeleteOutline />
          </Button>
          <Button size="small" onClick={handleRefreshCity}>
            <RefreshOutlined />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CityCard;

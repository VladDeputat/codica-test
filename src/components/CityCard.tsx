import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { DeleteOutline, RefreshOutlined } from "@mui/icons-material";

const CityCard = ({ ...props }) => {
    const{city}=props
    // console.log(props);
  return (
    <Card sx={{ minWidth: 200, marginLeft: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.main" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h5" component="div">
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">well meaning and kindly.</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small">
          <DeleteOutline />
        </Button>
        <Button size="small">
          <RefreshOutlined />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityCard;

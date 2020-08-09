import React, { useState, useEffect } from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "150px",
  },
}));

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  //console.log(inputSearch)
  const [searchedRestaurantArray, setSearchRestaurantArray] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  const classes = useStyles();
  //const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCoordinates(coords);
        console.log(coordinates);
      }
      // (error) => this.setState({ error: error.message }),
      // { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("user-key", "57800fe3a17bc04ca2e40cfb5cf036fc");
  let options = {
    method: "GET",
    headers: headers,
  };

  const fetchRestaurant = async (event) => {
    setInputSearch(event.target.value);
    console.log(inputSearch.trim());
    let url = `https://developers.zomato.com/api/v2.1/search?q=${inputSearch}&lat=${coordinates.lat}&lon=${coordinates.lng}&sort=real_distance`;

    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setSearchRestaurantArray([data.restaurants]);
        console.log(searchedRestaurantArray);
      });
  };

  return (
    <FormControl className={`search ${classes.root}`} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        value={inputSearch}
        onChange={fetchRestaurant}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        labelWidth={60}
      />
    </FormControl>
  );
}
export default Search;

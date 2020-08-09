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
 

  const classes = useStyles();
  //const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");

 
  return (
    <FormControl className={`search ${classes.root}`} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
     
        
  
      />
    </FormControl>
  );
}
export default Search;

import React from "react";
import { FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "150px",
    height: "60px",
  },
}));

function Offer() {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={`offers ${classes.root}`}>
        <Button
          variant="contained"
          color="default"
          startIcon={<LocalOfferIcon />}
        >
          Offers
        </Button>
      </FormControl>
    </div>
  );
}

export default Offer;

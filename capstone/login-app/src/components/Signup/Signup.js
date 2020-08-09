import React from "react";
import { FormControl, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "150px",
  },
}));
function Signup() {
  const classes = useStyles();
  return (
    <FormControl className={`Login ${classes.root}`}>
   <Link to="/LoginRegister"> <Button variant="contained" color="default" startIcon={<LockOpenIcon />}>
        Signup
      </Button>
      </Link>
    </FormControl>
  );
}

export default Signup;

import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import logo from "./logo.jpg";
import Search from "./Components/Search/Search";
import Offer from "./Components/Offer/Offer";
import Signup from "./Components/Signup/Signup";
import Cart from "./Components/Cart/Cart";
import { FormControl } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

firebase.initializeApp({
  apiKey: "AIzaSyBMyr6a13r2o4vpUEajtjjz-GqhhSQhuh4",
  authDomain: "reactfirebase-4ec45.firebaseapp.com",
  databaseURL: "https://reactfirebase-4ec45.firebaseio.com",
  projectId: "reactfirebase-4ec45",
  storageBucket: "reactfirebase-4ec45.appspot.com",
  messagingSenderId: "798421754913",
  appId: "1:798421754913:web:15c85856ff9a1a11fbaf60",
  measurementId: "G-XESBFPB3FT"
})


class App extends Component {
  
  state = { isSignedIn: false }
 
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
      <div className="app__header">
        <div className="logo">
          <img src={logo} alt="Logo" className="LOGO" />
        </div>
        <div className="app__inputs">
          <Search />
          <Offer />
          <Signup />
          <Cart />
          </div>
        </div>
        {this.state.isSignedIn ? (
          <span>
            <div className="app__header">

                <div class="w3-display-left w3-padding">
              <h3>Welcome {firebase.auth().currentUser.displayName}</h3>
            <div className="img">
            <img
              alt="profile picture" 
              src={firebase.auth().currentUser.photoURL }
               class="img-rounded" alt="profile " width="250" height="200" />
                        </div><br />
                        <FormControl>

             <Button variant="contained" aligned="center" color="default" startIcon={<LockOpenIcon />} 
             onClick={() => firebase.auth().signOut()} >
              Sign  out !</Button>
                 </FormControl>

            </div>
            </div>
          </span>

) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App
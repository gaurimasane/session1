import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBMyr6a13r2o4vpUEajtjjz-GqhhSQhuh4",
    authDomain: "reactfirebase-4ec45.firebaseapp.com",
    databaseURL: "https://reactfirebase-4ec45.firebaseio.com",
    projectId: "reactfirebase-4ec45",
    storageBucket: "reactfirebase-4ec45.appspot.com",
    messagingSenderId: "798421754913",
    appId: "1:798421754913:web:15c85856ff9a1a11fbaf60",
    measurementId: "G-XESBFPB3FT"
});

export default app;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMyr6a13r2o4vpUEajtjjz-GqhhSQhuh4",
    authDomain: "reactfirebase-4ec45.firebaseapp.com",
    databaseURL: "https://reactfirebase-4ec45.firebaseio.com",
    projectId: "reactfirebase-4ec45",
    storageBucket: "reactfirebase-4ec45.appspot.com",
    messagingSenderId: "798421754913",
    appId: "1:798421754913:web:15c85856ff9a1a11fbaf60",
    measurementId: "G-XESBFPB3FT"
};
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };
  const userRef = firestore.doc(`users/${user.uid}`);
const snapshot = await userRef.get();


console.error("Error creating user document", error);

return getUserDocument(user.uid);

const getUserDocument = async uid => {
if (!uid) return null;
try {
const userDocument = await firestore.doc(`users/${uid}`).get();
return {
  uid,
  ...userDocument.data()
};
} catch (error) {
console.error("Error fetching user", error);
}
};

const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };


  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };


  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
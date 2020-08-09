import React from "react";
import { Router } from "@reach/router";
import SignIn from "./src/Components/SignIn";
import SignUp from "./src/Components/SignUp";
function Application() {
  const user = null;
  return (
        user ?
        <SignUp />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
        </Router>

  );
}
export default Application;
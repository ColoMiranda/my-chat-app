import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.dribbble.com/users/27903/screenshots/4411322/connect.png?compress=1&resize=400x300"
          alt=""
        />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;

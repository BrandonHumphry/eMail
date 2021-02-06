import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

const signIn = () => {
  // auth;
};

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Log In
        </Button>
      </div>
    </div>
  );
}

export default Login;

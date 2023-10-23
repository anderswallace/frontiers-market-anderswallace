import React from "react";
import { useState } from "react";
import "./LoginBoxStyles.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { auth } from "../firebaseSetup";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(emailInput, passwordInput);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(emailInput, passwordInput);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-box-container">
      <div className="login-box-header">
        <text>Log In</text>
      </div>
      <div className="login-box-form">
        <form className="login-input">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
          >
            <TextField
              id="outlined-controlled"
              label="Email"
              value={emailInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmailInput(event.target.value);
              }}
            />
            <TextField
              id="outlined-controlled"
              label="Password"
              value={passwordInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPasswordInput(event.target.value);
              }}
            />
          </Box>
        </form>
      </div>
      <div className="login-submit-buttons">
        <div className="button-container">
          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={signIn}
          >
            Sign In
          </Button>
        </div>

        <div className="button-container">
          <Button fullWidth variant="contained" onClick={createAccount}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;

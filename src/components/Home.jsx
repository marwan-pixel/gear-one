import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import "@fontsource/roboto/300.css";
import { AppBar, Box, Typography, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const getSessionValue = sessionStorage.getItem("emailAddress");
  console.log(getSessionValue);
  if (getSessionValue !== undefined || getSessionValue !== null) {
    useNavigate("/home");
  }
  const [open, setOpen] = useState(null);

  const handleClickOpen = (modal) => {
    setOpen(modal);
  };

  function handleClickClose() {
    setOpen(null);
  }

  const defaultTheme = createTheme();

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright ©"} GearOne {new Date().getFullYear()}
      </Typography>
    );
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#E72929",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: "roboto" }}
          >
            GearOne
          </Typography>
          <Box>
            <Button
              onClick={() => handleClickOpen("signUp")}
              variant="outlined"
              color="inherit"
              sx={{
                mr: 2,
                fontFamily: "roboto",
                textTransform: "none",
              }}
            >
              <Typography>Sign Up</Typography>
            </Button>
            <Button
              onClick={() => handleClickOpen("login")}
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", "&:hover": "#0066CC" }}
            >
              <Typography>Sign In</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Login
        onClose={handleClickClose}
        open={open === "login"}
        toSignUp={() => {
          handleClickClose();
          handleClickOpen("signUp");
        }}
        navigate={useNavigate}
      >
        <Copyright sx={{ mb: 3 }} />
      </Login>
      <SignUp
        onClose={handleClickClose}
        open={open === "signUp"}
        toLogin={() => {
          handleClickClose();
          handleClickOpen("login");
        }}
      >
        <Copyright sx={{ mb: 3 }} />
      </SignUp>
    </ThemeProvider>
  );
}

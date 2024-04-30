import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "@fontsource/roboto/300.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Button,
  Dialog,
  TextField,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
  Link,
} from "@mui/material";
// import UseFetch from "../services/UseFetch";

export default function Login({ onClose, open, children, toSignUp, navigate }) {
  const usenavigate = navigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleEmailAddress(e) {
    setEmailAddress(e.target.value);
    if (e.target.validity.valid) {
      setEmailAddressError(false);
    } else {
      setEmailAddressError(true);
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    if (e.target.validity.valid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  async function login(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/users?emailAddress=" +
          emailAddress +
          "&password=" +
          password,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const result = {
        status: response.status,
        data: await response.json(),
      };
      if (result.status === 200) {
        sessionStorage.setItem(
          "name",
          result.data[0].firstName + result.data[0].lastName
        );
        sessionStorage.setItem("emailAddress", result.data[0].emailAddress);
        usenavigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      aria-labelledby="dialog-title"
      open={open}
    >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Typography
          sx={{ display: "flex", justifyContent: "space-between" }}
          mt={4}
          mb={1}
          ml={3}
          component="h1"
          variant="h4"
        >
          GearOne
          <CloseIcon
            onClick={onClose}
            className="mr-5 cursor-pointer"
            sx={{ fontSize: 30 }}
          />
        </Typography>
        <div className=" border border-black mx-5"></div>
        <Typography mt={1} ml={3} component="h1" variant="h5">
          Sign In
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            onSubmit={login}
            component="form"
            id="sign-in"
            noValidate
            sx={{ mt: 3, width: 500 }}
          >
            <TextField
              sx={{ mb: 3 }}
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              value={emailAddress}
              onChange={handleEmailAddress}
              error={emailAddressError}
              helperText={
                emailAddressError ? "Please input valid email address" : ""
              }
            />
            <TextField
              sx={{ mb: 2 }}
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePassword}
              error={passwordError}
              helperText={passwordError ? "Please input valid password" : ""}
            ></TextField>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember Me"
            />
            <Button
              disabled={
                passwordError ||
                (emailAddressError && emailAddress === "") ||
                password === ""
              }
              type="submit"
              fullWidth
              variant="contained"
              autoFocus
              color="error"
              sx={{ mt: 4, mb: 2 }}
              size="large"
            >
              Sign In
            </Button>
            <Grid sx={{ mb: 3 }} container>
              <Grid item sm>
                <Link color="inherit" underline="none">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid container item sm justifyContent={"flex-end"}>
                <Typography>Don't have an account?</Typography>
                <Link
                  color="inherit"
                  underline="hover"
                  sx={{ cursor: "pointer" }}
                  onClick={toSignUp}
                >
                  Click here
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {children}
      </Container>
    </Dialog>
  );
}

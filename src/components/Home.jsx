import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import "@fontsource/roboto/300.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Typography,
  Button,
  Dialog,
  TextField,
  Toolbar,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
  Link,
} from "@mui/material";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleClickCloseRegister = () => {
    setOpenRegister(false);
  };
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
              onClick={handleClickOpenRegister}
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
              onClick={handleClickOpen}
              variant="text"
              color="inherit"
              sx={{ textTransform: "none", "&:hover": "#0066CC" }}
            >
              <Typography>Sign In</Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClickClose}
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
              onClick={handleClickClose}
              className="mr-5 cursor-pointer"
              sx={{ fontSize: 30 }}
            />
          </Typography>
          <div className=" border border-black mx-5"></div>
          <Typography
            mt={1}
            ml={3}
            textTransform={"uppercase"}
            component="h1"
            variant="h5"
          >
            Sign In
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 3, width: 500 }}>
              <TextField
                sx={{ mb: 3 }}
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
              ></TextField>
              <TextField
                sx={{ mb: 2 }}
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
              ></TextField>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember Me"
              />
              <Button
                fullWidth
                variant="contained"
                autoFocus
                onClick={handleClickClose}
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
                <Grid item>
                  <Link color="inherit" underline="none">
                    Dont have an account? Click here
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mb: 3 }} />
        </Container>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClickCloseRegister}
        aria-labelledby="dialog-title"
        open={openRegister}
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
              onClick={handleClickCloseRegister}
              className="mr-5 cursor-pointer"
              sx={{ fontSize: 30 }}
            />
          </Typography>
          <div className=" border border-black mx-5"></div>
          <Typography
            mt={1}
            ml={3}
            textTransform={"uppercase"}
            component="h1"
            variant="h5"
          >
            Sign Up
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 3, width: 500 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    type="email"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ mb: 1 }}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                  ></TextField>
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                autoFocus
                onClick={handleClickCloseRegister}
                color="error"
                sx={{ mt: 4, mb: 2 }}
                size="large"
              >
                Sign Up
              </Button>
              <Grid sx={{ mb: 3 }} container justifyContent="flex-end">
                <Grid item>
                  <Link color="inherit" underline="none">
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mb: 3 }} />
        </Container>
      </Dialog>
    </ThemeProvider>
  );
}

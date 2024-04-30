import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "@fontsource/roboto/300.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Button,
  Dialog,
  TextField,
  Container,
  Grid,
  Link,
} from "@mui/material";

export default function SignUp({ onClose, open, children, toLogin }) {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      aria-labelledby="dialog-title"
      open={open}
      id="sign-up"
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
                  id="address"
                  label="Address"
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
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  type="tel"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ mb: 1 }}
                  required
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                ></TextField>
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              autoFocus
              onClick={onClose}
              color="error"
              sx={{ mt: 4, mb: 2 }}
              size="large"
            >
              Sign Up
            </Button>
            <Grid item sx={{ mb: 3 }} container justifyContent="flex-end">
              <Typography>Already have an account?</Typography>
              <Link
                color="inherit"
                sx={{ cursor: "pointer" }}
                onClick={toLogin}
                underline="hover"
              >
                Sign In
              </Link>
            </Grid>
          </Box>
        </Box>
        {children}
      </Container>
    </Dialog>
  );
}

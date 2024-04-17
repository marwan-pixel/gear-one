import * as React from "react";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "@fontsource/roboto/300.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Toolbar,
  Stack,
  Checkbox,
  Avatar,
  FormControlLabel,
  Container,
} from "@mui/material";

export default function ButtonAppBar() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#E72929",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "roboto" }}
            >
              GearOne
            </Typography>
            <Button
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
          </Toolbar>
        </AppBar>
      </Box>

      <Dialog
        fullWidth
        maxWidth="sm"
        onClose={handleClickClose}
        aria-labelledby="dialog-title"
        open={open}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Typography mt={4} mb={1} ml={3} component="h1" variant="h4">
            GearOne
          </Typography>
          <div className="border mx-5"></div>
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
            <Box component="form" noValidate sx={{ mt: 2, width: 500 }}>
              <TextField
                sx={{ marginBottom: 3 }}
                required
                fullWidth
                id="username"
                label="Username"
                type="text"
              ></TextField>
              <TextField
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
                sx={{ mt: 5, mb: 4, backgroundColor: "#E72929" }}
                size="large"
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </ThemeProvider>
  );
}

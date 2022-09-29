import { ThemeProvider } from "@emotion/react";
import {
  Box,
  createTheme,
  Toolbar,
  Typography,
  Drawer,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../methods/use-auth";
import { useState } from "react";
function NavigationBar({ toggleLogin }) {
  const [drawer, setDrawer] = useState(false);
  let auth = useAuth();
  let theme = createTheme({
    palette: {
      primary: {
        main: "#E4CDA7",
        light: "#FFE6BC",
        dark: "#C3B091",
      },
      secondary: {
        main: "#D79771",
        light: "#FFEBC9",
        dark: "#B05B3B",
      },
    },
  });
  const data = [
    {
      name: "Dashboard",
      icon: <MenuBookOutlinedIcon />,
    },
    { name: "Profile", icon: <AccountCircleIcon /> },
    { name: "Logout", icon: <LogoutIcon />, fn: auth.signOut },
  ];
  function toggleDrawer(value) {
    setDrawer(value);
  }
  const getList = () => (
    <div
      style={{ width: 250 }}
      onClick={() => {
        toggleDrawer(false);
      }}
    >
      {data.map((item, index) => (
        <ListItem onClick={item.fn} button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  let loggedOutSection = (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Button
        variant="text"
        size="large"
        sx={{
          color: "white",
        }}
        onClick={() => {
          let classes = document.getElementById("landing-content").classList;
          classes.remove("bg-landing-normal");
          classes.add("bg-landing-blurred");
          toggleLogin();
        }}
      >
        Login
      </Button>

      <Button
        variant="contained"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        Sign-up
      </Button>
    </Box>
  );

  let loggedInSection = (
    <Box>
      <Button
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <MenuIcon fontSize="large" sx={{ color: "white" }}></MenuIcon>
      </Button>
      <Drawer
        anchor={"right"}
        open={drawer}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {getList()}
      </Drawer>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="absolute"
        component={"nav"}
        sx={{ backgroundColor: "rgba(0,0,0,0.3)", zIndex: 1 }}
      >
        <Toolbar
          position="relative"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <MenuBookOutlinedIcon fontSize="large" sx={{ color: "white" }} />
          <Typography
            variant="h4"
            noWrap
            component="div"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
              color: "white",
            }}
          >
            BookGroups
          </Typography>

          {auth.user ? loggedInSection : loggedOutSection}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavigationBar;

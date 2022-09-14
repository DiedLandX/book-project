import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Toolbar, Typography, Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { useAuth } from "../methods/use-auth";
function NavigationBar({ toggleLogin }) {
  let auth = useAuth();
  let theme = createTheme({
    palette: {
      primary: {
        main: "#AC7D88",
        light: "#DEB6AB",
        dark: "#85586F",
      },
      secondary: {
        main: "#D79771",
        light: "#FFEBC9",
        dark: "#B05B3B",
      },
    },
  });
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
          <MenuBookOutlinedIcon fontSize="large" />
          <Typography
            variant="h4"
            noWrap
            component="div"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            BookGroups
          </Typography>

          {auth.user ? (
            "Logged In"
          ) : (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                variant="text"
                size="large"
                sx={{
                  color: "white",
                }}
                onClick={() => {
                  let classes =
                    document.getElementById("landing-content").classList;
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
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavigationBar;

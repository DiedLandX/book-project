import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
function NavigationBar() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#fafafa",
        light: "#ffffff",
        dark: "#c7c7c7",
      },
      secondary: {
        main: "#212121",
        light: "#484848",
        dark: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="absolute"
        component={"nav"}
        sx={{ backgroundColor: "#c1c1c1" }}
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

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button variant="text" size="large" sx={{ color: "black" }}>
              Login
            </Button>
            <Button variant="contained">Sign-up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavigationBar;
